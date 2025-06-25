import { ui, defaultLang } from './languages';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLanguageUrl(lang: string, currentPath: string) {
  // 移除当前路径中的语言前缀
  const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
  
  // 如果是默认语言，不添加前缀
  if (lang === defaultLang) {
    return pathWithoutLang === '/' ? '/' : pathWithoutLang;
  }
  
  // 添加语言前缀
  return `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
} 