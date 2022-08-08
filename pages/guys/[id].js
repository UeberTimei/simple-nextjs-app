export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(guy => {
        return  {
            params: {id: guy.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {guy: data}
    }
}

const Details = ({guy}) => {
    return (
        <div>
            <h1>{guy.name}</h1>
            <p>{guy.email}</p>
            <p>{guy.website}</p>
            <p>{guy.address.city}</p>
        </div>
    );
}

export default Details;