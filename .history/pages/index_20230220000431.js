import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Menu from '../component/menu'

export default function Home(){

  const r = useRouter();

  return (
    <>
      <Head>
      <title>ACNH ARTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Blathers.png" />
      </Head>

      <main className={styles.main1}>
        <Menu></Menu>
      <div className={styles.header}>
        <h1>Welcome to Museum in Animal Crossing </h1>
        </div>
        <div className={styles.blathers}>
          <div className={styles.bubble}>
            <a>Be careful when buying fake arts!

            <a>It cannot be donated to the Museum or sold in Nook's Canny</a>
          </div>
              <img 
                  src="Blathers.png"
                  width={400}
                  height={400}
              />
            </div>
        <button 
                className={styles.Btn}
                onClick={
                  ()=>r.push("/arts")} >See Museum Arts</button>
      </main>
    </>
  );
}
