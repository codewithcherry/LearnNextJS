"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navlinks=[
  {title:"Home", path:"/"},
  {tile:'Products', path:"/products"},
  {title:'About', path:'/about'},
  {title:'Login', path:'/login'},
  {title:'Register',path:'/register'}
]

export default function RootLayout({ children }) {

  const pathname=usePathname();
  return (
    <html lang="en">
      <body
        className={``}
      >
        <header className="w-full  p-2 text-black bg-blue-200 text-center">
          
          <div className="flex">
            {
              navlinks.map((navitem,index)=>{
                const active=pathname==navitem.path;
                return <Link className={`text-md text-white font-medium m-2 p-2 ${active?'border-b-2':''} hover:border-b-2 border-white`} href={navitem.path} key={index}>{navitem.title}</Link>
              })
            }
           
          </div>
        </header>
        {children}
        <footer className="w-full m-1 p-4 text-2xl text-black bg-red-200 text-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
