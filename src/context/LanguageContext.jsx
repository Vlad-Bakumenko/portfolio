import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(true)

  const t = useCallback((en, de) => language ? en : de, [language])

  useEffect(() => {
    document.documentElement.lang = language ? 'en' : 'de'
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useLanguage = () => useContext(LanguageContext)
