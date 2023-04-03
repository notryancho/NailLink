import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/';

class AuthService {
    async Login(name, email, password) {
        try {
          const response = await axios.post(BASE_URL + 'login', {
            name,
            email,
            password
          });
          
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }
      
          return response.data;
        } catch (error) {
          throw new Error(error.message);
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

export const authService = new AuthService();
