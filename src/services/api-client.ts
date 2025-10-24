import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fe94773ef692430789d6d814ffc67b80'
    }
})

