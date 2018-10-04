<div align="center">
  <img src="./src/assets/logo-icon-vue.png" width="200px">
  <h1>Vue Backoffice Example</h1>
</div>

<p align="center">
  Vue Backoffice Example is a <a href="https://vuejs.org/">Vue.js</a> simple CRUD, with authentication login, and somewhat basic functionalities.
</p>

[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/f919839a11263434d011/maintainability)](https://codeclimate.com/github/guastallaigor/vue-backoffice-example/maintainability)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg)](https://cypress.io)

> **Note:** This project is ment to be used with the [Laravel Backoffice Example](https://github.com/guastallaigor/laravel-backoffice-example).
> It has all the functionalities that is used with this project.

## Features

* [Vuetify](https://vuetifyjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Sass](https://sass-lang.com/)
* Route modules
* CRUD examples
* Authentication

## Quick start

This is a Vue CLI 3.0 project, so just run `npm install` and `npm run serve`.

This is very simple. Just add every new module inside the app folder. Note that this is just an advice, this is not mandatory by any means.

Example for the "Route modules": For the Example module folder, it has the `ExampleRouter.js`. Note that without the "Router" sufix, the routing system would not work properly.

By default it runs on `localhost:8080`.

## Routes Information Table

Route | Description
--- | ---
/login |
/employee | List of all employees
/employee-new | Create a new employee
/employee-edit/:id | Edit a employee, by passing his id
/* | Goes to a not found page

## Demo

Want to see it running? You can check it out at https://vue-backoffice-example.herokuapp.com

## TODO

* [ ] Add E2E tests with Cypress.
* [ ] Add Unit tests.
* [ ] Add more functionalities.
* [ ] Add Vuex usage.
* [ ] Add Docker.

## License

MIT © [guastallaigor](https://github.com/guastallaigor)
