import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Menu({

}) {

    return (
        <>
   
     <nav>
     <div className={styles.hamburgerMenu}>
    <input className={styles.menuToggle} type="checkbox" />
    <label className={styles.menuBtn} for="menuToggle">
      <span></span>
    </label>

    <ul className="menuBox">
      <li><a className="menu__item" href="#">Home</a></li>
      <li><a className="menu__item" href="#">About</a></li>
      <li><a className="menu__item" href="#">Team</a></li>
      <li><a className="menu__item" href="#">Contact</a></li>
      <li><a className="menu__item" href="#">Twitter</a></li>
    </ul>
  </div>
    </nav>
        </>
    )
}