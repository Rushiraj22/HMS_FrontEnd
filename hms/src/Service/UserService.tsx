import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (userData: { name: string; email: string; password: string; }) => {
    try {
        const response = await axiosInstance.post('/users/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export { registerUser };

// const loginUser = async (credentials: { email: string; password: string; }) => {
//     try {
//         const response = await axiosInstance.post('/users/login', credentials);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// Add more user-related methods as needed

