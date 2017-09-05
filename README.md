# Digital India Static Website

## Setup instructions
You need nodeJS (>v4), npm (or yarn).
Run the following commands **inside the IndusAction directory**

```bash
npm install -g gulp   # installs gulp globally, we use it as the task runner
npm install           # installs all the dependencies locally (yarn can also be used here)
```

Now to start the dev server run
```bash
gulp    # starts the dev server and filewatcher + livereload (by reading local gulpfile.js)
```
The server runs on port 9000, after running the above commands, navigate to http://localhost:9000 to see the website.

## Deploying
To build for deployment run
```bash
gulp deploy   # builds and compiles the project
node app.js   # runs the server (port 9000) you can use forever to run app.js and restart on crashes
```
