
import axios from 'axios';

const API_BASE_URI = 'https://ecomerce-master.herokuapp.com/api/v1';

export const getOneItem = async (itemId) => {
    try {
        const res = await axios.get(`${API_BASE_URI}/item/${itemId}`);
        if (res.status == 200) {
            return await res.data;
        } else {
            throw new Error('Response Status Error:', res.status);
        }
    } catch(err) {
        console.log(err);
    }
    return []; //Error: Return No Data
};

export const getAllItems = async () => {
    try {
        const res = await axios.get(`${API_BASE_URI}/item`);
        if (res.status == 200) {
            return await res.data;
        } else {
            throw new Error('Response Status Error:', res.status);
        }
    } catch(err) {
        console.log(err);
    }
    return [];
     //Error: Return No Data
};