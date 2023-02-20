import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Menu({

}) {

    return (
        <>
   
   <nav>
   <div className={styles.navbar}>
<div  className={styles.navcontainer}>
    <input className={styles.checkbox} type="checkbox" name="" id="" />
    <div className={styles.hamburgerlines}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>  

  <div className={styles.menuitems}>
    <li><a href="#">Home</a></li>
    <li><a href="#">Museum Arts</a></li>
  </div>
</div>
</div>
    </nav>
        </>
    )
}