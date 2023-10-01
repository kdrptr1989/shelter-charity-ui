'use client'

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavbarButtons = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return ( 
    <div className="flex flex-row gap-4">
        <AiOutlineMenu
        onClick={handleClick}
        className="text-3xl text-gray-800 cursor-pointer sm:hidden"/>

        {click && (
            <div className="
            flex
            flex-col
            gap-4
            absolute
            top-0
            left-0
            w-full
            h-screen
            bg-white
            z-10
            items-center
            justify-center
            sm:hidden
            ">
                <AiOutlineClose
                onClick={handleClick}
                className="text-3xl text-gray-800 cursor-pointer absolute top-5 right-5"/>

                <div className="justify-center flex flex-col gap-10 w-full h-full items-center">
                    <div>
                        <ul 
                         onClick={closeMobileMenu}
                         className="cursor-pointer text-gray-800 font-semibold duration-300 text-lg">
                            Rólunk
                         </ul>
                    </div>
                    <div>
                        <ul 
                         onClick={closeMobileMenu}
                         className="cursor-pointer text-gray-800 font-semibold duration-300 text-lg">
                            Staitsztikák
                         </ul>
                    </div>
                    <div>
                        <ul 
                         onClick={closeMobileMenu}
                         className="cursor-pointer text-gray-800 font-semibold duration-300 text-lg">
                            Adományozási Csomagok
                         </ul>
                    </div>
                    <div>
                        <ul 
                         onClick={closeMobileMenu}
                         className="cursor-pointer text-gray-800 font-semibold duration-300 text-lg">
                            Elérhetőség
                         </ul>
                    </div>

                    <Link href="/login">
                        <ul
                        onClick={closeMobileMenu}
                        className="cursor-pointer text-gray-800 font-semibold duration-300 text-lg">
                            Bejelentkezés
                        </ul>
                    </Link>
                </div>
            </div>
        )}

        <div className="sm:block hidden flex-row">
            <Link  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/login">
            Bejelentkezés
            </Link>
        </div>      
    </div> 
    );
}
 
export default NavbarButtons;