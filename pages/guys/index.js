import Head from "next/head";
import styles from '../../styles/Guys.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            guys: data
        }
    }
}

const Timeis = ({guys}) => {
    return (
        <>
            <Head>
                <title>Timei List | List</title>
                <meta name="keywords" content="timei" />
            </Head>
            <div>
                <h1>All guys</h1>
                {guys.map(guy => (
                    <Link key={guy.id} href={`/guys/${guy.id}`}>
                        <a className={styles.single}>
                            <h3>{guy.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Timeis;