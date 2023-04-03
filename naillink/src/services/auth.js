import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/user';

class AuthService {
    async Login(email, password) {
        try {
          const response = await axios.post(BASE_URL + 'login', {
            email,
            password
          });
      
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }
      
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

  Logout() {
    localStorage.removeItem('user');
  }

  SignUp(name, email, password, isCustomer, isNailTech) {
    return axios.post(BASE_URL + 'user', {
      name,
      email,
      password,
      isCustomer,
      isNailTech
    });
  }

  GetCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

const authService = new AuthService();
export default authService;
