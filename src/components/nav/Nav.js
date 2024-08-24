"use client";
import "./nav.css"
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/Group 1.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
export default function Nav (){
    const [menuopen,setmenuopen]=useState(false)
    return(
        <>
        <section className="nav flex justify-between p-4 m-4 items-center">
            <div className="logo">
                    <Image src={logo} alt="logo" className="logo-inner"/>
            </div>
            <ul className=" capitalize hidden sm:flex gap-4 font-bold">
                <Link href={"/"} ><li>home</li></Link>
                <Link href={"/services"}><li>services</li></Link>
                <Link href={"/blogs"}><li>blogs</li></Link>
                <Link href={"/about"}><li>about</li></Link>
                <Link href={"/contact"}><li>contact</li></Link>
                
            </ul>
            <div className="login  items-center  hidden sm:flex gap-2">
                <Link href={"/Login"}><button type="button" className="capitalize mr-2 font-bold">login</button></Link>
                <Link href={"/signup"}><button type="button" className="btn">sign up</button></Link>
                
                
            </div>
            <div className="btn sm:hidden" onClick={()=>setmenuopen(!menuopen)}>
                <MenuIcon/>
            </div>

            <ul className={menuopen?"menu_open":"menu_closed"}>
                <div className="close_icon" onClick={()=>setmenuopen(!menuopen)}><CloseIcon /></div>
                
                <Link href={"/"} onClick={()=>setmenuopen(!menuopen)}><li>home</li></Link>
                <Link href={"/services"} onClick={()=>setmenuopen(!menuopen)}><li>services</li></Link>
                <Link href={"/blogs"} onClick={()=>setmenuopen(!menuopen)}><li>blogs</li></Link>
                <Link href={"/about"} onClick={()=>setmenuopen(!menuopen)}><li>about</li></Link>
                <Link href={"/contact"} onClick={()=>setmenuopen(!menuopen)}><li>contact</li></Link>
                <div className="login  items-center flex gap-4">
                <Link href={"/Login"} onClick={()=>setmenuopen(!menuopen)}><button type="button" className="capitalize mr-2 font-bold">login</button></Link>
                <Link href={"/signup"} onClick={()=>setmenuopen(!menuopen)}><button type="button" className="btn">sign up</button></Link>
                
                
            </div>
            </ul>
            
        </section>
        </>
    )
}