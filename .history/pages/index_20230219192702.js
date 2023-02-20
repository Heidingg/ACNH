import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();
  const [image, setImage] = useState('');
  const [name, setName] = useState({});
  const [price, setPrice] = useState();

  function handleClick() {
    router.push('/arts');
  };


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
      <Link href="/arts" > </Link>
      </main>
    </>
  );
}