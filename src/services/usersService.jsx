import axios from 'axios';
const API_USERS_URL = 'http://127.0.0.1:8000/users/';
export const getUsers = async () => {
    try {
        const response = await axios.get(API_USERS_URL);
        return response.data;
      } catch (error) {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
        throw error.response?.data || { error: "Lỗi kết nối đến server" };
      }
};