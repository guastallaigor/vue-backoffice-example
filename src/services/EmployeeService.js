import http from '@/plugins/axios';
import Service from './Service';

const api = '/v1/backoffice';

class EmployeeService extends Service {
  constructor() {
    super('employee');
    this.baseUrl = 'employee';
  }

  active(payload) {
    return http.put(`${api}/${this.baseUrl}/active`, payload);
  }

  inactive(payload) {
    return http.put(`${api}/${this.baseUrl}/inactive`, payload);
  }
}
const employeeService = new EmployeeService();
export default employeeService;
