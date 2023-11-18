import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [theme,setTheme]=useState('light')

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}> 
    <div className={`${theme} 
      ${theme=='dark'?'bg-[#121212]':null}`} >
        <Header/>
        <Home/>
    </div>
    </ThemeContext.Provider>
      
    </>
  )
}

export default App
