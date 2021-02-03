import Head from 'next/head';
import Link from 'next/Link';
import styles from '../../styles/Home.module.css';
import axios from 'axios';


// getServerSideProps() es similar a getStaticProps()
// Cuando: Se ejecuta cada vez que se hace una petición al servidor o cada vez que pido la ruta
// Que: Cuando sabemos que los datos cambian muy seguido
// Caso Especifico: CMS ---> Content Management System
//
export async function getServerSideProps() {
    const response = await axios.get('https://dummyapi.io/data/api/user?limit=10',{
        headers:{
            'app-id': '60121e4aa7384d693701c4b1'
    }}).catch(err => console.log(err));

    const { data } = response;

    return {
        props:{
            users:data
        }
    }
};

export default function Users(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Users</title>
            </Head>
            <h2>En Users</h2>
            {
                props.users.data.map(user =>
                    <Link href={`/users/${user.id}`}>
                        <a>
                            {user.firstName}{' '}{user.lastName}
                        </a>
                    </Link>)
            }
        </div>
    )
}
