import http from './http';

const tokenKey = 'uds-token';

const tokenUser = 'user';

const api = '/v1/backoffice';

class LoginService {
  login(payload) {
    return http.post(`${api}/login`, payload);
  }

  logout() {
    localStorage.clear();
    return http.put(`${api}/logout`);
  }

  obterNomeUsuario() {
    return localStorage.getItem(tokenUser);
  }

  obterToken() {
    return localStorage.getItem(tokenKey);
  }

  salvarToken(payload) {
    localStorage.setItem(tokenKey, payload);
  }

  salvarUser(payload) {
    localStorage.setItem(tokenUser, payload);
  }
}

const loginService = new LoginService();
export default loginService;
