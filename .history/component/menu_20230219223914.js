import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';

import styles from '../styles/Home.module.css'

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

    <ul className={styles.menuBox}>
      <li><a className={styles.menuItem} href="#">Home</a></li>
      <li><a className={styles.menuItem} href="#">Museum Arts</a></li>
    
    </ul>
  </div>
    </nav>
        </>
    )
}