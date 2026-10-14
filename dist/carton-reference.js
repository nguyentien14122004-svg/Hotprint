(() => {
  const library = document.querySelector('[data-carton-library]');
  if (!library) return;

  const form = document.getElementById('carton-search');
  const query = document.getElementById('carton-query');
  const use = document.getElementById('carton-use');
  const scope = document.getElementById('carton-scope');
  const sort = document.getElementById('carton-sort');
  const grid = document.getElementById('carton-grid');
  const count = document.getElementById('fold-result-count');
  const empty = document.getElementById('carton-empty');
  const status = document.getElementById('carton-status');
  const selectionLink = document.getElementById('carton-selection-link');
  const selectionCount = document.getElementById('carton-selection-count');
  if (!form || !query || !use || !sort || !grid || !count || !empty) return;

  const products = window.HOTPRINT_PRODUCTS || [];
  const byId = new Map(products.map(product => [product.id, product]));
  const cards = [...grid.querySelectorAll('.fold-sample[data-model]')];
  const originalOrder = new Map(cards.map((card, index) => [card, index]));
  const lang = document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('en') ? 'en' : 'vi';
  const tr = (vi, en, zh) => ({vi, en, zh})[lang];
  const storageKey = 'hotprint-sample-selection';
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLocaleLowerCase().trim();
  const collator = new Intl.Collator(lang === 'zh' ? 'zh-Hans' : lang, {numeric: true, sensitivity: 'base'});
  const name = product => product?.[lang] || (lang === 'zh' && window.HOTPRINT_I18N?.translate ? window.HOTPRINT_I18N.translate(product?.en || '') : product?.en) || product?.vi || product?.id || '';
  const allowedUses = new Set([...use.options].map(option => option.value));
  const searchable = new Map(cards.map(card => {
    const product = byId.get(card.dataset.model);
    return [card, normalize([card.dataset.search, card.textContent, product?.id, product?.vi, product?.en, product?.zh, ...(product?.images || [])].join(' '))];
  }));
  let statusTimer;

  function announce(message) {
    if (!status) return;
    clearTimeout(statusTimer);
    status.hidden = false;
    status.textContent = message;
    statusTimer = setTimeout(() => { status.textContent = ''; status.hidden = true; }, 6000);
  }

  function readSelection() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      return Array.isArray(stored) ? [...new Set(stored)].filter(id => typeof id === 'string' && byId.has(id)).slice(0, 6) : [];
    } catch {
      announce(tr('Không đọc được danh sách mẫu đã lưu trong trình duyệt này.', 'Your saved sample list could not be read in this browser.', '无法读取此浏览器中保存的样品清单。'));
      return [];
    }
  }

  let selection = readSelection();

  function readState() {
    const params = new URLSearchParams(location.search);
    return {
      q: (params.get('q') || '').slice(0, 100),
      use: allowedUses.has(params.get('use')) ? params.get('use') : 'all',
      scope: params.get('scope') === 'selected' ? 'selected' : 'all',
      sort: ['name', 'selected'].includes(params.get('sort')) ? params.get('sort') : 'default'
    };
  }

  let state = readState();

  function updateLanguageLinks() {
    document.querySelectorAll('[data-lang]').forEach(link => {
      const target = new URL(link.href, location.origin);
      target.search = location.search;
      target.hash = location.hash;
      link.href = target.href;
    });
  }

  function updateURL(push) {
    const url = new URL(location.href);
    for (const key of ['q', 'use', 'scope', 'sort']) {
      const value = state[key];
      if (value && !(['use', 'scope'].includes(key) && value === 'all') && !(key === 'sort' && value === 'default')) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    const target = url.pathname + url.search + url.hash;
    if (target !== location.pathname + location.search + location.hash) history[push ? 'pushState' : 'replaceState'](null, '', target);
    updateLanguageLinks();
  }

  function updateSelection() {
    library.querySelectorAll('[data-carton-save]').forEach(button => {
      const id = button.dataset.cartonSave;
      const chosen = selection.includes(id);
      button.setAttribute('aria-pressed', String(chosen));
      button.setAttribute('aria-label', (chosen ? tr('Bỏ chọn mẫu', 'Remove sample', '取消选择样品') : tr('Chọn mẫu', 'Select sample', '选择样品')) + ': ' + name(byId.get(id)));
      const label = button.querySelector('[data-save-label]');
      if (label) label.textContent = chosen ? tr('Đã chọn', 'Selected', '已选择') : tr('Chọn mẫu', 'Select sample', '选择样品');
    });
    if (selectionCount) selectionCount.textContent = String(selection.length);
    if (selectionLink) {
      selectionLink.hidden = selection.length === 0;
      const route = lang === 'vi' ? '/yeu-cau-mau/' : lang === 'zh' ? '/zh/request-a-sample/' : '/en/request-a-sample/';
      const target = new URL(route, location.origin);
      if (selection.length) target.searchParams.set('models', selection.join(','));
      selectionLink.href = target.pathname + target.search;
    }
  }

  function render() {
    query.value = state.q;
    use.value = state.use;
    if (scope) scope.value = state.scope;
    sort.value = state.sort;
    const terms = normalize(state.q).split(/\s+/).filter(Boolean);
    let visible = 0;
    const sorted = [...cards].sort((a, b) => {
      if (state.sort === 'name') return collator.compare(name(byId.get(a.dataset.model)), name(byId.get(b.dataset.model))) || originalOrder.get(a) - originalOrder.get(b);
      if (state.sort === 'selected') return Number(selection.includes(b.dataset.model)) - Number(selection.includes(a.dataset.model)) || originalOrder.get(a) - originalOrder.get(b);
      return originalOrder.get(a) - originalOrder.get(b);
    });
    sorted.forEach(card => {
      card.hidden = (state.use !== 'all' && card.dataset.use !== state.use) || (state.scope === 'selected' && !selection.includes(card.dataset.model)) || !terms.every(term => searchable.get(card).includes(term));
      if (!card.hidden) visible++;
      grid.append(card);
    });
    count.textContent = `${visible} ${tr('sản phẩm', visible === 1 ? 'product' : 'products', '款产品')}`;
    empty.hidden = visible > 0;
    updateSelection();
  }

  function applyForm() {
    state = {q: query.value.trim().slice(0, 100), use: allowedUses.has(use.value) ? use.value : 'all', scope: scope?.value === 'selected' ? 'selected' : 'all', sort: ['name', 'selected'].includes(sort.value) ? sort.value : 'default'};
    updateURL(true);
    render();
  }

  form.addEventListener('submit', event => { event.preventDefault(); applyForm(); });
  use.addEventListener('change', applyForm);
  scope?.addEventListener('change', applyForm);
  sort.addEventListener('change', applyForm);
  library.addEventListener('click', event => {
    const reset = event.target.closest('[data-carton-reset]');
    if (reset) {
      event.preventDefault();
      state = {q: '', use: 'all', scope: 'all', sort: 'default'};
      updateURL(true);
      render();
      query.focus({preventScroll: true});
      return;
    }
    const button = event.target.closest('[data-carton-save]');
    if (!button) return;
    event.preventDefault();
    const id = button.dataset.cartonSave;
    if (!byId.has(id)) return;
    const removing = selection.includes(id);
    if (!removing && selection.length >= 6) {
      announce(tr('Bạn đã chọn 6 mẫu. Bỏ một mẫu để thêm mẫu khác.', 'You have selected 6 samples. Remove one before adding another.', '您已选择6款样品。请先取消一款，再添加其他样品。'));
      return;
    }
    const next = removing ? selection.filter(value => value !== id) : [...selection, id];
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      announce(tr('Không lưu được mẫu trong trình duyệt này. Bạn vẫn có thể yêu cầu mẫu trực tiếp.', 'This browser could not save your selection. You can still request a sample directly.', '此浏览器无法保存您的选择。您仍可直接申请样品。'));
      return;
    }
    selection = next;
    if (state.sort === 'selected' || state.scope === 'selected') render();
    else updateSelection();
    announce(removing ? tr('Đã bỏ chọn mẫu.', 'Sample removed.', '已取消选择样品。') : tr('Đã thêm vào danh sách mẫu.', 'Sample added to your selection.', '已添加到样品清单。'));
  });
  window.addEventListener('popstate', () => { state = readState(); render(); updateLanguageLinks(); });
  window.addEventListener('hashchange', updateLanguageLinks);
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    selection = readSelection();
    if (state.sort === 'selected' || state.scope === 'selected') render();
    else updateSelection();
  });
  query.maxLength = 100;
  updateURL(false);
  render();
})();
