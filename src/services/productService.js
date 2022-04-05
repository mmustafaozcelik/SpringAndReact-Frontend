import axios from "axios";

export default class ProductService{
    getProduct(){
        return axios.get("http://localhost:8081/api/products/getall")
    }
}