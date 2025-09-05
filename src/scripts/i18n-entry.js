import { getTranslations } from '../utils/i18n';

function updateTexts(lang) {
    const currentLang = lang || localStorage.getItem('language') || 'es'
    const t = getTranslations(currentLang)

    document.documentElement.lang = currentLang

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')

        if (!key) return
        const keys = key.split('.')
        let value = t
        
        for (const k of keys) {
            if (value == null) break
            value = value[k]
        }
        if (typeof value === 'string') el.textContent = value
    })
}

// Ejecutamos al cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => updateTexts())
} else {
    updateTexts()
}

// Escuchamos el evento global para cambios de idioma
window.addEventListener('languageChange', (e) => {
    const lang = e?.detail
    updateTexts(lang)
})