import axios from "axios";

// const BASE_URL = "http://localhost:3000/"
const BASE_URL = "https://whereswaldo-backend.fly.dev"

const api = axios.create({
    baseURL: BASE_URL
})

export default api