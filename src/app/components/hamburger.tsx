"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null) //メニューのdivを参照するため

  useEffect(()=>{
    const handleMenuOpen = (e:MouseEvent) =>{
      if (menuRef.current && !menuRef.current.contains(e.target as Node))//e.targetはクリックされた要素
        //divが表示されている && クリックされたものがmenuRef.currentに無い
        setOpenMenu(false)
    };

    if (openMenu){
      document.addEventListener("mousedown",handleMenuOpen)
      //mousedownはマウスボタンを押した時
    };
    return ()=>{
      document.removeEventListener("mousedown",handleMenuOpen)
    };  //useeffectでreturnの中に書いた関数はクリーンアップ関数になる
  },[openMenu]);

  return (
    <>
      <div className="absolute top-0 right-0">
        {/* ヘッダー */}
        <header className="flex justify-between py-10 px-10">
          {/* ハンバーガーボタン */}
          <button
            type="button"
            className="z-20 space-y-2 ml-auto relative"
            onClick={() => {setOpenMenu(!openMenu)}}
          >
            <div
              className={`w-8 h-0.5 bg-gray-600 transition-transform ${
                openMenu ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <div className={`w-8 h-0.5 bg-gray-600 transition-opacity ${openMenu ? "opacity-0" : ""}`} />
            <div
              className={`w-8 h-0.5 bg-gray-600 transition-transform ${
                openMenu ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </header>

        {/* ナビゲーションメニュー */}
        <div ref={menuRef}> {/* menuRef.currentにdivを格納 */}
          <nav
            className={`fixed top-0 right-0 w-3/12 h-screen bg-slate-50 flex flex-col justify-start pt-8 px-3 shadow-lg transform transition-transform duration-300 ${
              openMenu ? "translate-x-0" : "translate-x-full"
            } z-10`}
          >
            <ul className="text-2xl pt-[10vh] space-y-10 font-ZenakuGothicNew flex flex-col items-center">
              <li><a href="/">Home</a></li>
              <li><a href="profile">About Me</a></li>
              <li><a href="articles">Articles</a></li>
              <li><a href="works">Works</a></li>
              <li><a href="skills">Skills</a></li>
              <li><a href="updates">Updates</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
