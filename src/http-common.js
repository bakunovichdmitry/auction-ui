import axios from "axios";

export default axios.create({
    baseURL: `http://localhost:8000/`,
    mode: 'cors',
    headers: {
        "Content-type": "application/json"
    }
});