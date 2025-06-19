import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
    }
})

export const getRequest = async (url, params = {}) => {
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const postRequest = async (url, data = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const putRequest = async (url, data = {}) => {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteRequest = async (url) => {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };