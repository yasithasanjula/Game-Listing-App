import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Update the class for the body element based on the selected theme
    document.body.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : ''}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
