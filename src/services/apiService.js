import axios from "axios";

const BASE_URL = 'https://api.chopmoni.org/api/v1'

export async function createBusiness(data) {
    try {
        let response = await axios.post(`${BASE_URL}/business`, data);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export async function fetchOrders() {
    try {
        let response = await axios.get(`${BASE_URL}/business/orders`);
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }   
}

export async function fetchMenu() {
    try {
        let response = await axios.get(`${BASE_URL}/business/menu`);
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }   
}

export async function createMenuItems(data) {
    try {
        let response = await axios.post(`${BASE_URL}/menu/items`, data);
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function uploadImageToServer(data) {
    try {
    let response = await axios.post(`${BASE_URL}/file/upload`, data);
    console.log(response);
    return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function registerBusinessInfo(data){
    try{
        let response = axios.post(`${BASE_URL}/menu/items`, data);
        console.log(response);
        return response.data.data;
    }catch(error){
        console.log(error);
    }
}export async function createUserWallet(data){
    try{
        let response = axios.post(`${BASE_URL}/menu/items`, data);
        console.log(response);
        return response.data.data;
    }catch(error){
        console.log(error);
    }
}