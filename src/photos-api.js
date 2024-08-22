import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=1Y9g4XfeviHr6tCy3KyAXB3JecfEz1szp_gLr2OZ6bI"

export const fetchPhotosByKeyword = async keyword => {
    const response = await axios.get(`/search/photos?query=${keyword}`)
    return response.data.hits;
} 