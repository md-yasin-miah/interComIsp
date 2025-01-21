import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { HomeAPIProvider } from './HomeAPIContext'
import { PolicyAPIProvider } from './PolicyAPIContext'

const Provider = ({children}) => {
  return (
    <ThemeProvider>
          <HomeAPIProvider>
            <PolicyAPIProvider>
              {children}
            </PolicyAPIProvider>
          </HomeAPIProvider>
    </ThemeProvider>
  )
}

export default Provider