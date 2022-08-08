import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>That page cannot be found</h1>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link> </p>
        </div>
    );
}

export default NotFound;