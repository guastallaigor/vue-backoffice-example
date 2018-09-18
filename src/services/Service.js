import http from '@/plugins/axios';

// const api = 'https://5b27acd162e42b00149156d5.mockapi.io';
// const api = 'https://5b3d215f95bf8d0014a1d733.mockapi.io';
// const api = 'http://192.168.5.43:8190/api/v1/backoffice';
const api = '/v1/backoffice';


export default class Service {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(id) {
    return http.get(`${api}/${this.baseUrl}/${id}`);
  }

  getList() {
    return http.get(`${api}/${this.baseUrl}`);
  }

  save(payload) {
    return http.post(`${api}/${this.baseUrl}`, payload);
  }

  edit(payload) {
    return http.put(`${api}/${this.baseUrl}/${payload.id}`, payload);
  }

  delete(id) {
    return http.delete(`${api}/${this.baseUrl}/${id}`);
  }
}
