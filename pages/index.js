import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timei List | Home</title>
        <meta name="keywords" content="timei" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam laboriosam, voluptates nostrum perspiciatis tempore provident quia pariatur eligendi, aliquid dolorem eveniet. Numquam nisi harum quisquam quia, cumque aliquid at!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam laboriosam, voluptates nostrum perspiciatis tempore provident quia pariatur eligendi, aliquid dolorem eveniet. Numquam nisi harum quisquam quia, cumque aliquid at!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam laboriosam, voluptates nostrum perspiciatis tempore provident quia pariatur eligendi, aliquid dolorem eveniet. Numquam nisi harum quisquam quia, cumque aliquid at!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam laboriosam, voluptates nostrum perspiciatis tempore provident quia pariatur eligendi, aliquid dolorem eveniet. Numquam nisi harum quisquam quia, cumque aliquid at!</p>
        <Link href='/guys'>
          <a className={styles.btn}>See Timei Listing</a>
        </Link>
      </div>
    </>
  )
}
