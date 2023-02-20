import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Menu({

}) {

    return (
        <>
   
   <nav>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
            <input className={styles.checkBox} type="checkbox" name="" id="" />
            <div className={styles.hamburgerLines}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>  
          <div class="logo">
            <h1>Navbar</h1>
          </div>
          <div className={styles.menuItems}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Museum Arts</a></li>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}