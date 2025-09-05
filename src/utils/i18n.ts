import { translations, type Language, type Translations } from './translations'

// Función para obtener el idioma actual del navegador o localStorage
export function getCurrentLanguage(): Language {
    if (typeof window !== 'undefined') {
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            return savedLang
        }
        
        // Fallback al idioma del navegador
        const browserLang = navigator.language.startsWith('es') ? 'es' : 'en'
        return browserLang
    }
    
    // Fallback por defecto en SSR
    return 'es'
}

// Función para obtener las traducciones
export function getTranslations(lang?: Language): Translations {
    const currentLang = lang || getCurrentLanguage()
    return translations[currentLang]
}

// Función para cambiar el idioma
export function setLanguage(lang: Language): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang)
        document.documentElement.lang = lang
        window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }))
    }
}

// Función para obtener texto traducido por clave
export function t(key: string, lang?: Language): string {
    const translations = getTranslations(lang)
    const keys = key.split('.')
    
    let value: any = translations
    for (const k of keys) {
        value = value?.[k]
        if (value === undefined) {
            console.warn(`Translation key "${key}" not found for language "${lang || getCurrentLanguage()}"`)
            return key
        }
    }
    
    return typeof value === 'string' ? value : key
}

// Script inline para prevenir parpadeo de idioma
export const languageScript =
`(function() {
  const savedLang = localStorage.getItem('language') || (navigator.language.startsWith('es') ? 'es' : 'en');
  document.documentElement.lang = savedLang;
})();`