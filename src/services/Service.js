import http from './http';

export default class Service {
  constructor(baseUrl) {
    this.v1 = '/v1/backoffice';
    this.baseUrl = baseUrl;
  }

  get(id) {
    return http.get(`${this.v1}/${this.baseUrl}/${id}`);
  }

  getList() {
    return http.get(`${this.v1}/${this.baseUrl}`);
  }

  save(payload) {
    return http.post(`${this.v1}/${this.baseUrl}`, payload);
  }

  edit(payload) {
    return http.put(`${this.v1}/${this.baseUrl}/${payload.id}`, payload);
  }

  delete(id) {
    return http.delete(`${this.v1}/${this.baseUrl}/${id}`);
  }
}
