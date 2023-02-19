import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import record from "../data/disneymovies.json";
import React, { useState, useEffect } from "react";


export default function Ranking() {
    // console.log(record);

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowImage(true);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    return (
        <>
      <Head>
        <title>Disney Movies</title>
        <meta name="author" content="YouTube Rankings" /> 
        <meta name="description" content="Top Popular Youtube Channels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/youtube.png" />
      </Head>

            <main className={styles.main}>

                                    {record.map((rec, index) => {
                                        return (
                                            <tr className={styles.row} key={index}>
                                                <td>{rec.movie_title}</td>
                                                <td>{rec.release_date}</td>
                                                <td>{rec.genre}</td>
                                            </tr>
                                        )
                                    })}
                        
            </main>
        </>
    );
}