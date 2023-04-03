import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/';

class AuthService {
  Login(email, password) {
    return axios
      .post(API_URL + 'login', {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  Logout() {
    localStorage.removeItem('user');
  }

  SignUp(name, email, password, isCustomer, isNailTech) {
    return axios.post(API_URL + 'user', {
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

export default new AuthService();
