This is a template project for Vue3 lib development.

You can just clone this repo, or you can create github repo using this template project.

You will have to update `name` in:

-   rollup.config.js
-   main.js
-   package.json

to suit you requirement.

# Commands

### npm run build

build the project to

-   cjs
-   esm-browser
-   esm-bundler
-   global

### npm run test

run tests using source code in lib

### npm run test:build

run tests using built files (eg. output of `npm run build`)

### npm run test:cov

run tests and generate coverage data

### npm run doc:dev

using `vue-cli-service` to start a develop website which source in `src`

### npm run doc:build

build the website
