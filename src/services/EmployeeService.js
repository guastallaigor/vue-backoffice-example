import http from './http';
import Service from './Service';

class EmployeeService extends Service {
  constructor() {
    super('employee');
    this.baseUrl = 'employee';
    this.v1 = '/v1/backoffice';
  }

  active(id) {
    return http.post(`${this.v1}/${this.baseUrl}/active/${id}`);
  }

  inactive(id) {
    return http.post(`${this.v1}/${this.baseUrl}/inactive/${id}`);
  }
}
const employeeService = new EmployeeService();
export default employeeService;
