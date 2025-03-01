import axios from 'axios';
const API_USER_URL = 'http://127.0.0.1:8000/user';
export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_USER_URL}/${userId}`);
        return response.data;
      } catch (error) {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
        throw error.response?.data || { error: "Lỗi kết nối đến server" };
      }
};