import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

// getStaticProps() es Propio de Next JS
// Hace la llamada a API desde el lado del servidor, procesa el resultado
// y los pasa como PROPS al componente para que entregue al cliente el HTML
// con la información.
export async function getStaticProps() {
    //Aquí puedo hacer llamadas a API y pasar el resultado como Props
    // Async/Await es otra forma de resolver promesas
    const response = await axios.get('https://dummyapi.io/data/api/post?limit=10',{
        headers:{
            'app-id': '60121e4aa7384d693701c4b1'
    }}).catch(err => console.log(err));

    const { data } = response;

    return {
        props:{
            posts:data
        }
    }
};

export default function Posts(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Posts</title>
            </Head>
            <h2>En Post</h2>
            {props.posts.data.map(element => <li>{element.text}</li>)}
        </div>
    )
}
