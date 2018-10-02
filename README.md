<div align="center">
  <img src="./src/assets/logo-icon.png" width="128px">
  <h1>Vue Backoffice Example</h1>
</div>

<p align="center">
  Vue Backoffice Example is a <a href="https://vuejs.org/">Vue.js</a> simple CRUD, with authentication login, and somewhat basic functionalities.
</p>

[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

> **Note:** This project is ment to be used with the [Laravel Backoffice Example](https://github.com/guastallaigor/laravel-backoffice-example).
> It has all the functionalities that is used with this project.

## Features

* [Vuetify](https://vuetifyjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Stylus](http://stylus-lang.com/)
* [Vuex](https://vuex.vuejs.org/en/)
* Route modules

## Quick start

This is a Vue CLI 3.0 project, so just run `npm install` and `npm run serve`.

This is very simple. Just add every new module inside the app folder. Note that this is just an advice, this is not mandatory by any means.

Example for the "Route modules": For the Example module folder, it has the `ExampleRouter.js`. Note that without the "Router" sufix, the routing system would not work properly.

## Routes Information Table

Route | Description
--- | ---
/login |
/employee | List of all employees
/employee-new | Create a new employee
/employee-edit/:id | Edit a employee, by passing his id
* | Goes to a not found page

## Development

By default it runs on `port:8080`.

## TODO

* [ ] Add E2E tests.
* [ ] Add Unit tests.
* [ ] Add more functionalities.
* [ ] Add Vuex usage.
* [ ] Add Docker.

## License

MIT © [guastallaigor](https://github.com/guastallaigor)
