import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/disneymovies.json'



export default function Home() {
  console.log(record);

  return (
    <>
      <Head>
        <title>Disney Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/disney-logo.jpeg" />
      </Head>
      <main className={styles.main}>
          {
            record.map( (rec, index) => {
              return(
                <>
                  
                  <>{rec.Class == "Movies" ? <div key={index}>
                                                <div>{rec.movie_title}</div>
                                                <div>{rec.release_date}</div>
                                                <div>{rec.genre}</div></div> : <></>}</>
                </>
              )
            })
          }
      </main>
    </>
  )
}