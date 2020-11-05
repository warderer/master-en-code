import axios from 'axios';

function ApiRequest(ApiUri, query, setFunc) {
        axios.get(ApiUri+query)
        .then((result)=>{
            console.log(result);
            setFunc(result.data);
            return true;
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
}

export default ApiRequest;