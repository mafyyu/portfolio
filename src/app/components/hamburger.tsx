"use client";
import React from "react"
import { useState } from "react"

export default function Hamburger(){
    const [openMenu,setOpenMenu] = useState(false)
    const handleMenuOpen=()=>{
        setOpenMenu(!openMenu)
    };
    return(
        <>
            <div className="">
                <header className="flex justify-between py-6 px-6  ">
                    <button type="button" className="z-10 space-y-2 ml-auto" onClick={handleMenuOpen} >
                    <div className={openMenu ?"w-8 h-0.5 bg-gray-600 rotate-45 translate-y-2.5":"w-8 h-0.5 bg-gray-600"} />
                        <div className={openMenu ?"":"w-8 h-0.5 bg-gray-600"}/>
                        <div className={openMenu ?"w-8 h-0.5 bg-gray-600 -rotate-45 ":"w-8 h-0.5 bg-gray-600"} />
                        
                    </button>
                </header>
                <nav className={openMenu ?"text-center fixed bg-slate-50 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3":"fixed right-[-100%] "}>
                    <ul className="text-2xl pt-[10vh] space-y-10 font-ZenakuGothicNew">
                        <li><a href="/">Home</a></li>
                        <li><a href="profile">About Me</a></li>
                        <li><a href="articles">Articles</a></li>
                        <li><a href="works">Works</a></li>
                        <li><a href="skills">Skills</a></li>
                        <li><a href="updates">Updates</a></li>
                        <li><a href=""></a>??</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}