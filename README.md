<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.ibb.co/YQ52bDY/logo.png" alt="OwnCourses logo"></a>
</p>

<h3 align="center">OwnCourses Students App</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/owncourses/students-app.svg)](https://github.com/owncourses/students-app/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/owncourses/students-app.svg)](https://github.com/owncourses/students-app/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

Application for OwnCourses students.

---

## Features

- [x] Login/logout
- [x] User courses list
- [x] modules/lessons in courses
- [x] Single lesson page
- [x] Additional course attachments
- [x] Course authors
- [x] Mark lesson as completed
- [x] Course/module progress info

# Development installation notes

`yarn` - install dependencies

`yarn start` - run build in server

##### App requires working server instance with API. Install and run it locally or use our demo instance for preview: 

Set this in `.env` file:

`SERVER_URL="https://owncourses.org"`

Login data for https://owncourses.org API:
```
Login: student@example.com
Password: testPassword
```

# Production build notes

Adjust app settings (used on build time) with `.env` file. Default values are picked from `.env.defaults`

`yarn` - install dependencies

`yarn build` - run production build


**Works great deployed with Netlify**

Netlify build settings: 

* Build command: `yarn build`
* Publish directory: `build`

