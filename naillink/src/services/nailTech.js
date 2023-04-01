import axios from 'axios';

const API_URL = 'http://localhost:5000/api/nailtechs/';

class NailTechService {
  getNailTechProfile() {
    return axios.get(API_URL + 'profile');
  }

  updateNailTechProfile(data) {
    return axios.post(API_URL + 'profile', data);
  }

  getNailTechAppointments() {
    return axios.get(API_URL + 'appointments');
  }

  getNailTechReviews() {
    return axios.get(API_URL + 'reviews');
  }

  getServiceList() {
    return axios.get(API_URL + 'services');
  }

  addService(service) {
    return axios.post(API_URL + 'services', service);
  }

  deleteService(serviceId) {
    return axios.delete(API_URL + 'services/' + serviceId);
  }

  updateService(serviceId, data) {
    return axios.put(API_URL + 'services/' + serviceId, data);
  }
}

export default new NailTechService();
