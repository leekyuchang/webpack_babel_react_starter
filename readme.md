# Starter for Node + Webpack + Express + Babel + React builds.

### Summary
* The minimum boilerplate with minimum opinion: write client code in ES6 + React.
* Decide how to implement styling, server-side view engines, and data persistence.

### Notes
* `client` folder is the build folder.
* Normalize.css included.
* Node server initially configured for static files. Go nuts.

### Usage
* `git clone` this repo.
* `npm install`
* `npm run build` compiles `bundle.js`
* `npm run dev` starts `webpack-dev-server`
* `npm start` starts node server

### Docker option
* Check out the companion docker image (Alpine Linux + Node + Git) with an autostart script that pulls and runs this git repo when started.
* `docker pull bradcrispin/docker-auto-node`
* `docker run -it -rm -p 8080:8080 bradcrispin/docker-auto-node`
