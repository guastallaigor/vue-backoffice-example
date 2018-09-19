import http from './http';

class LoginService {
  constructor() {
    this.tokenUser = 'user';
    this.api = '/v1/backoffice';
    this.tokenKey = 'token';
  }

  login(payload) {
    return http.post(`${this.api}/login`, payload);
  }

  logout() {
    localStorage.clear();
    return http.put(`${this.api}/logout`);
  }

  obterNomeUsuario() {
    return localStorage.getItem(this.tokenUser);
  }

  obterToken() {
    return localStorage.getItem(this.tokenKey);
  }

  salvarToken(payload) {
    localStorage.setItem(this.tokenKey, payload);
  }

  salvarUser(payload) {
    localStorage.setItem(this.tokenUser, payload);
  }
}

const loginService = new LoginService();
export default loginService;
