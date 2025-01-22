import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { APIProvider } from './APIContext'
import { PolicyAPIProvider } from './PolicyAPIContext'

const Provider = ({children}) => {
  return (
    <ThemeProvider>
          <APIProvider>
            <PolicyAPIProvider>
              {children}
            </PolicyAPIProvider>
          </APIProvider>
    </ThemeProvider>
  )
}

export default Provider