import axios from "axios";
import {ItemType} from "../features/producrs/products-api";

const instance = axios.create({
    baseURL:'http://localhost:5000/',
})
export const cardApi = Object.freeze({
    async getAllProducts() {
        const response = await instance.get<ItemType []>('products');
        return response.data
    }
})