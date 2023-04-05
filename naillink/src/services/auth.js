import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/';

class AuthService {
  async Login(email, password) {
    try {
      const response = await axios.post(BASE_URL + 'login', {
        email,
        password
      });
      if (response?.data?.nailtech) {
        localStorage.setItem('id', response.data.nailtech._id.$oid)
      }
      if (response?.data?.existing_user) {
        localStorage.setItem('id', response.data.exisiting_user._id.$oid)
      }
      if (response?.data?.customer) {
        localStorage.setItem('id', response.data.customer._id.$oid)
      }
      return response.data
    } catch (error) {
      throw new Error(error.message);
    }
  }

  Logout() {
    localStorage.removeItem('user');
  }

  async SignUp(name, email, password, is_customer, is_nail_tech) {
    return axios.post(BASE_URL + 'user', {
      name,
      email,
      password,
      is_customer,
      is_nail_tech
    });
  }

  GetCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export const authService = new AuthService();
