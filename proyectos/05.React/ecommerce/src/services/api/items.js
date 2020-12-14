
import axios from 'axios';

const API_BASE_URI = 'https://ecomerce-master.herokuapp.com/api/v1';

export const getOneItem = async (itemId) => {
    try {
        const res = await axios.get(`${API_BASE_URI}/item/${itemId}`);
        return await res.data;
    } catch(err) {
        console.log(err);
    }
    return []; //Error: Return No Data
};

export const getAllItems = async () => {
    try {
        const res = await axios.get(`${API_BASE_URI}/item`);
        return await res.data;
    } catch(err) {
        console.log(err);
    }
    return []; //Error: Return No Data
};