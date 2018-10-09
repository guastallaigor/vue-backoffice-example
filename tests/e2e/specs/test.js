// https://docs.cypress.io/api/introduction/api.html
export const loginRequest = () => cy.request('POST', 'http://localhost:3000/api/v1/backoffice/login', {
    login: 'teste@gmail.com',
    password: 'teste123'
  }
).then((response) => {
  console.log(response);
  expect(response).to.have.property('headers');
  expect(response).to.have.property('body');
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('token');
  cy.url().should('be.equals', 'http://localhost:8080/#/employee')
});

beforeEach(function () {
  cy.visit('http://localhost:8080/#/login');
  cy.title().should('include', 'Vue Backoffice Example');
  cy.get('#app').should('be.visible');
  cy.get('.logo-login').should('be.visible');
  cy.contains('.headline.grey--text.text--darken-1', 'Vue Backoffice Example');
});

describe('When try to login into the application with valid credentials', () => {
  it('should login into the system ok if clicked on button', () => {
    cy.get('#email').first().type('teste@gmail.com');
    cy.get('#password').first().type('teste123');
    cy.contains('Login').click(() => loginRequest());
  });

  it('should login into the system ok if form submitted', () => {
    cy.get('#email').first().type('teste@gmail.com');
    cy.get('#password').first().type('teste123');
    cy.get('.login').submit(() => loginRequest());
  });
});
