import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(true)
  const t = (en, de) => language ? en : de
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