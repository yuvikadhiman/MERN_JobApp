import axios from 'axios';
const CustomFetch=axios.create({
    baseURL:'/api/v1'
});
export default CustomFetch;