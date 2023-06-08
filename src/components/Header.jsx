import { useState, useEffect } from "react";
import { FaPaperPlane } from 'react-icons/fa';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <article>
            {/* {loading && <p className="flex text-2xl"> Loading <PulseLoader color="#272928" /> </p>}
            {error && <p>{error}</p>}
            {!error && header && ( */}
            <header>
                <section className="flex items-center px-56 gap-2 bg-primarycolor01 w-full h-8">
                    <FaPaperPlane className="text-white" />
                    <p className="pr-8 text-white">4000@dinmaegler.com</p>
                    <BsFillTelephoneFill className="text-white" />
                    <p className="text-white">+45 7070 4000</p>
                    <article className='gap-4 justify-end'>
                        <article className='flex items-center gap-2 w-full end-0 pl-[33rem]'>
                            <BsPersonFill className="text-white" />
                            <Link to="/register"><p className='text-white hover:underline'>Log ind</p></Link>
                        </article>
                    </article>
                </section>

            <nav className='flex items-center justify-between px-56 h-20'>
            <Link to="/"><img src="dinmaegler.png" alt="Din Mægler logo" /></Link>
                <ul className="flex gap-6 w-1/2 px-6">
                    <li><Link to="/" className="text-grey hover:underline">Boliger til salg</Link></li>
                    <li><Link to="/" className="text-grey hover:underline">Mæglere</Link></li>
                    <li><Link to="/" className="text-grey hover:underline">Mine favoritter</Link></li>
                    <li><Link to="/" className="text-grey hover:underline">Kontakt os</Link></li>
                </ul>
            </nav>
            </header>
            {/* )} */}
        </article>
     );
}
 
export default Header;