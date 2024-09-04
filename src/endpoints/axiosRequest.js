import axios from "axios";


// create a axios instance with BASEURL
export default axios.create({
    baseURL:"http://localhost:4000"
})