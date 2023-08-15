import axios from 'axios';
const CustomFetch=axios.create({
    baseURL:'http://localhost:5000/api/v1'
});
export default CustomFetch;