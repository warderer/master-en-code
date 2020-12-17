import axios from 'axios';

const API_BASE_URI = 'https://ecomerce-master.herokuapp.com/api/v1';

export const getOneUser = async (userId) => {
    const token = window.localStorage.getItem('token');
    if (token) {
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        try {
            const res = await axios.get(`${API_BASE_URI}/user/${userId}`, config);
            if (res.status == 200) {
                return await res.data;
            } else {
                throw new Error('Response Status Error:', res.status);
            }
        } catch (err) {
            console.log(err);
        }
    } else throw new Error('getOneUser: No Token Found');
};

export const getAllUsers = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        try {
            const res = await axios.get(`${API_BASE_URI}/user`,config);
            if (res.status == 200) {
                return await res.data;
            } else {
                throw new Error('Response Status Error:', res.status);
            }
        } catch (err) {
            console.log(err);
        }
    } else throw new Error('getAllUsers: No Token Found');
};

export const getCurrentUser = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        try {
            const res = await axios.get(`${API_BASE_URI}/user/me`, config);
            if (res.status == 200) {
                return await res.data;
            } else {
                throw new Error('Response Status Error:', res.status);
            }
        } catch (err) {
            console.log(err);
        }
    } else throw new Error('getCurrentUser: No Token Found');
};

export const patchUser = async (userId) => {
    const token = window.localStorage.getItem('token');
    if (token) {
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        try {
            const res = await axios.post(`${API_BASE_URI}/user/${userId}`, config);
            if (res.status == 201) {
                return await res.data;
            } else {
                throw new Error('Response Status Error:', res.status);
            }
        } catch (err) {
            console.log(err);
        }
    } else throw new Error('patchUser: No Token Found');
};