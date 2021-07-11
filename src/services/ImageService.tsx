import axios from 'axios';
import { getHeaders } from './config/api';


const ImageService = {  
    getImages() {
      return axios.get("http://localhost:8081/images", {
        headers: getHeaders(),
        // params: queryObject,
      }).then((res) => {
        return Promise.resolve(res);
      }).catch((err) => {
        // ToastService.error(err);
        return Promise.reject(err);
      });
    },
}

export default ImageService;