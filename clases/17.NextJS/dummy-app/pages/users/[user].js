import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Home.module.css';

export async function getServerSideProps(context) {
    const { user } = context.query;
    const response = await axios.get(`https://dummyapi.io/data/api/user/${user}`,{
        headers:{
            'app-id': '60121e4aa7384d693701c4b1'
    }}).catch(err => console.log(err));

    const { data } = response;

    return {
        props:{
            user:data
        }
    }
};

export default function User({user}){
    const router = useRouter();
    const { user: userID } = router.query;
    return(
        <div className = {styles.container}>
            <h2>Perfil</h2>
            <h3>{user.firstName}{' '}{user.lastName}</h3>
        </div>
    )
}