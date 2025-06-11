import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (userData: { name: string; email: string; password: string; }) => {
    try {
        const response = await axiosInstance.post('/user/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


const loginUser = async (credentials: { email: string; password: string; }) => {
    try {
        const response = await axiosInstance.post('/user/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { registerUser, loginUser };
// Add more user-related methods as needed

