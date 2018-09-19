import http from './http';
import Service from './Service';

class EmployeeService extends Service {
  constructor() {
    super('employee');
    this.baseUrl = 'employee';
    this.api = '/v1/backoffice';
  }

  active(payload) {
    return http.put(`${this.api}/${this.baseUrl}/active`, payload);
  }

  inactive(payload) {
    return http.put(`${this.api}/${this.baseUrl}/inactive`, payload);
  }
}
const employeeService = new EmployeeService();
export default employeeService;
