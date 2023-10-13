"use client"

import { useEffect, useState } from 'react';



export default function BtnInstallPwa({ size = 24, color = "#16a34a" }) {

  const [prompt, setPromt] = useState();
  const [isNative, setIsNavite] = useState();


  const promptToInstall = () => {
    console.log(isNative);
    if (prompt) {
      return prompt.prompt();
    }
  };


  useEffect(() => {
    const ready = (e) => {
      e.preventDefault();
      setPromt(e);
    };
    if (window) {
      console.log(window.navigator);
      if (window.matchMedia('(display-mode: standalone)').matches) {
        // native
        setIsNavite(true)
      } else {
        // navegador
        setIsNavite(false)
        window.addEventListener("beforeinstallprompt", ready);
        return () => {
          window.removeEventListener("beforeinstallprompt", ready);
        };
      }
    }


  }, []);


  return <div onClick={() => promptToInstall()}
    className="fixed top-0 right-0  p-8"
  >
    <div className='relative group z-50 py-1 px-4 text-black cursor-pointer flex items-center text-lg gap-4 rounded-full'
    style={{background:"white", cursor:"pointer",color:color}}
    >


      <svg
        fill={color}
        width={size}
        height={size}
        viewBox="0 -960 960 960" >
        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>

      <span className='hidden group-hover:flex'>
        Install
      </span>
    </div>
  </div>

}