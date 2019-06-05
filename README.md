# OwnCourses Students App

ReactJs application for OwnCourses students:

## Features

- [x] Login/logout
- [x] User courses list
- [x] modules/lessons in courses
- [x] Single lesson page
- [x] Additional course attachments
- [x] Course authors
- [x] Mark lesson as completed
- [ ] Course/module progress info

# Development installation notes

`yarn` - install dependencies

`yarn start` - run build in server

##### App requires working server instance with API. Install and run it locally or use our demo instance for preview: 

Set this in `.env` file:

`SERVER_URL="https://owncourses.org/api"`

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

