import Link from 'next/link';

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Timei List</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/guys'><a>Timei Listing</a></Link>
        </nav>
    );
}

export default NavBar;