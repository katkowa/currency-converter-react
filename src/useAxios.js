import axios from "axios";
import { useEffect } from 'react';

export const useAxios = (url, handleResponse, handleError) => {
    // setTimeout only for dev purpose to be able to see load message  
    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
                .then(response => handleResponse(response.data))
                .catch(error => handleError(error));
        }, 1000)
    }, []);
}