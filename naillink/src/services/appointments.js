import axios from 'axios';

const API_URL = 'http://localhost:5000/api/appointments/';

class AppointmentService {
  getAvailableTimeSlots(date) {
    return axios.get(API_URL + 'availableTimeSlots', {
      params: { date }
    });
  }

  getCustomerAppointments() {
    return axios.get(API_URL + 'customerAppointments');
  }

  getNailTechAppointments() {
    return axios.get(API_URL + 'nailTechAppointments');
  }

  bookAppointment(customerId, nailTechId, date, time, serviceId) {
    return axios.post(API_URL + 'book', {
      customerId,
      nailTechId,
      date,
      time,
      serviceId
    });
  }

  cancelAppointment(appointmentId) {
    return axios.post(API_URL + 'cancel', {
      appointmentId
    });
  }

  completeAppointment(appointmentId) {
    return axios.post(API_URL + 'complete', {
      appointmentId
    });
  }
}

export default new AppointmentService();
