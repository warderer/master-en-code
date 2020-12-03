
import axios from 'axios';

const API_BASE_URI = 'https://ecomerce-master.herokuapp.com/api/v1';

export const getAllItems = (setItems) => {
    axios.get(`${API_BASE_URI}/item`)
    .then( (response) => {
        setItems(response.data);
    })
    .catch((err) => {
        alert(err.response.data.message);
    });
};

export const getOneItem = (itemId, setItem) => {
    axios.get(`${API_BASE_URI}/item/${itemId}`)
    .then( (response) => {
        setItem(response.data);
    })
    .catch((err) => {
        alert(err.response.data.message);
    });
};