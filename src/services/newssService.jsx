import axios from 'axios';
const API_NEWSS_URL = 'http://127.0.0.1:8000/newss/';
export const getNewss = async () => {
    try {
        const response = await axios.get(API_NEWSS_URL);
        return response.data;
      } catch (error) {
        console.error('Lỗi khi lấy danh sách tin tức:', error);
        throw error.response?.data || { error: "Lỗi kết nối đến server" };
      }
};