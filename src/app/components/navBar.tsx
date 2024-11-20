"use client"
import React, { useState } from 'react'
import Image from "next/image";
import styles from "./style/navbar.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

<nav className={`p-5 pr-10 pl-10 text-slate-300 ${styles.navbar}`}>
    <div className='self-center'>
    <Link href="/">
        <Image
            src="/main.png"
            alt="logo"
            width={34}
            height={34}
            />
    </Link>
    </div>
    <div className={styles.hamburger} onClick={toggleMenu}>
    {isOpen ? <FaTimes /> : <FaBars />}
    </div>
    <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
    <li><a>Auctions</a></li>
    <li><a>Roadmap</a></li>
    <li><a>Discover</a></li>
    <li><a>Community</a></li>
    </ul>
    <div className={`${styles.navLinks} gap-4 ${isOpen ? styles.active2 : ''}`}>
            <button className={`${styles.button} ${styles.button1}`}>
                <p className={styles.buttonText} style={{color:"#7780A1"}}>Contact</p>
            </button>
            <button className={`${styles.button} ${styles.button2}`}>
                <p className={styles.buttonText} style={{color:"#FFF"}}>My account</p>
            </button>
        </div>
</nav>
  )
}

export default NavBar