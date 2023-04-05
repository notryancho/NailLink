import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/';

class NailTechService {
  getNailTechProfile() {
    return axios.get(API_URL + 'profile');
  }

  updateNailTechProfile(data) {
    return axios.post(API_URL + 'profile', data);
  }

  getNailTechAppointments() {
    return axios.get(API_URL + 'appointment');
  }

  getNailTechReviews() {
    return axios.get(API_URL + 'review');
  }

  getServiceList() {
    return axios.get(API_URL + 'service');
  }

  addService(service) {
    return axios.post(API_URL + 'service');
  }

  deleteService(serviceId) {
    return axios.delete(API_URL + 'service/' + serviceId);
  }

  updateService(serviceId, data) {
    return axios.put(API_URL + 'service/' + serviceId, data);
  }
}

export default new NailTechService();
