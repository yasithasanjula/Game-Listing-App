import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle,setToggle]=useState(false)
    const {theme,setTheme}=useContext(ThemeContext)

    useEffect(()=>{
      console.log("Theme",theme)
    },[])

  return (
    <>
      <div className="flex items-center p-3">
        <div>
          <img src={logo} alt="" className="w-20 h-20" />
        </div>
        <div className="flex bg-slate-200 p-2 w-full 
         mx-5 rounded-full items-center"
        >
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            placeholder="Search Games"
            className="px-2 bg-transparent dark:bg-cyan-400 outline-none"
          />
        </div>
        <div>
          {theme=='light' ? (
            <HiMoon
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => setTheme('dark')}
            />
          ) : (
            <HiSun
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => setTheme('light')}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Header