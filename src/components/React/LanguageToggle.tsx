import { useState, useEffect } from 'react'

const LanguageToggle = () => {
    const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es')

    useEffect(() => {
        // Verificamos el idioma guardado o la preferencia del navegador
        const savedLang = localStorage.getItem('language') as 'es' | 'en'
        const browserLang = navigator.language.startsWith('es') ? 'es' : 'en'
        
        const shouldUse = savedLang || browserLang
        setCurrentLang(shouldUse)
        
        // Aplicamos el idioma al documento
        document.documentElement.lang = shouldUse
        
        // Disparamos el evento personalizado para que los componentes se actualicen
        window.dispatchEvent(new CustomEvent('languageChange', { detail: shouldUse }))
    }, [])

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es'
        setCurrentLang(newLang)
        
        // Guardamos preferencia
        localStorage.setItem('language', newLang)
        
        // Aplicamos al documento
        document.documentElement.lang = newLang
        
        // Disparamos evento para actualizar contenido
        window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }))
    }

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center px-2 text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white cursor-pointer transition-all duration-300 group"
            aria-label={currentLang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
        >
            
            {/* Texto del idioma actual */}
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto h-5 w-5 transition-all duration-300 delay-50 ease-out transform md:group-hover:-translate-y-1 md:group-hover:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>

            <span className="absolute inset-0 m-auto text-xs font-medium uppercase tracking-wider transition-all duration-300 ease-out transform opacity-0 translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {currentLang}
            </span>
        </button>
    )
}

export default LanguageToggle