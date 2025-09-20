import { useState, useEffect } from 'react'
import { getTranslations } from '../../utils/i18n'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

    const t = getTranslations()

    useEffect(() => {
        // Verificar el tema guardado o preferencia del sistema
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
        setIsDark(shouldBeDark)
        
        // Aplicar el tema al documento
        if (shouldBeDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark'
        setIsDark(!isDark)
        
        // Guardar preferencia
        localStorage.setItem('theme', newTheme)
        
        // Aplicar al documento
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white relative p-2 rounded-full transition-colors duration-300 cursor-pointer group"
            aria-label={isDark ? t.icons.switchToLight : t.icons.switchToDark}
            title={isDark ? t.icons.switchToLight : t.icons.switchToDark}
        >
            {/* Sol (modo claro) */}
            <svg
                className={`w-5 h-5 transition-all duration-300 ${ isDark ? 'md:rotate-90 opacity-0' : 'md:rotate-0 opacity-100'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:group-hover:rotate-90`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            
            {/* Luna (modo oscuro) */}
            <svg
                className={`w-5 h-5 transition-all duration-300 ${ isDark ? 'md:rotate-0 opacity-100' : 'md:-rotate-90 opacity-0' } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:group-hover:-rotate-90`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
        </button>
    )
}

export default ThemeToggle