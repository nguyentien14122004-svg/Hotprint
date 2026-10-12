/* Shared, local-only Simplified Chinese translations. No translation service or tracking. */
(() => {
  const normalize = s => s.replace(/\s+/g, ' ').trim();
  const dictionary = window.HOTPRINT_ZH_DICTIONARY || {};
  const translate = source => {
    if (typeof source !== 'string') return source;
    const key = normalize(source);
    const translated = Object.hasOwn(dictionary,key) ? dictionary[key] : undefined;
    if (translated === undefined) return source;
    return (source.match(/^\s*/)?.[0] || '') + translated + (source.match(/\s*$/)?.[0] || '');
  };
  const deepTranslate = value => typeof value === 'string' ? translate(value) : Array.isArray(value) ? value.map(deepTranslate) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k,v]) => [k,deepTranslate(v)])) : value;
  const language = () => location.pathname.startsWith('/zh/') ? 'zh' : location.pathname.startsWith('/en/') ? 'en' : 'vi';
  const path = (en, vi, lang=language()) => lang === 'vi' ? vi : lang === 'zh' ? en.replace(/^\/en\//, '/zh/') : en;
  window.HOTPRINT_I18N = {translate, deepTranslate, language, path};
})();
