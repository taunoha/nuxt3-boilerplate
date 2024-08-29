# Nuxt3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

## Features

- [x] [Nuxt](https://nuxt.com)
- [x] [Vue](https://vuejs.org)
- [x] [VueUse](https://nuxt.com/modules/vueuse)
- [x] [Tailwind CSS](https://nuxt.com/modules/tailwindcss)
- [x] [Icons](https://nuxt.com/modules/icon)
- [x] [Security](https://nuxt.com/modules/security) (among other things, it also offers an option to use Basic Auth authorization)

### 👉 Code quality and conventions

- [x] ESLint ([Nuxt ESLint module](https://nuxt.com/modules/eslint)), Stylelint and Prettier to check the source code for programmatic and stylistic errors, and format your code as recommended by Vue, Nuxt and Tailwind CSS
- [x] Git hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically lint and format your code upon committing.

### 👉 Automation (optional)

Feel free to remove the ``.github`` folder and/or the ``ecosystem.config.js`` file.

- [x] [Github Actions workflow](https://docs.github.com/en/actions/using-workflows/about-workflows) for automated CI/CD to remote server using SSH
- [x] [pm2](https://pm2.keymetrics.io) config example file

## Getting Started

```shell
$ git clone https://github.com/taunoha/nuxt3-boilerplate.git 
$ cd nuxt3-boilerplate
$ rm -rf .git

$ npm install
$ npm run dev
```

