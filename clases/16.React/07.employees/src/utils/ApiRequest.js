import axios from 'axios';

function ApiRequest(ApiUri, query, setFunc) {
        axios.get(ApiUri+query)
        .then((result)=>{
            console.log(result);
            if (result.status === 200) {
                setFunc(result.data);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
}

export default ApiRequest;