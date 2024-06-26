# Nuxt3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

## Features

- [x] [Nuxt](https://v3.nuxtjs.org)
- [x] [Vue](https://vuejs.org)
- [x] [VueUse](https://vueuse.org/guide/#nuxt)
- [x] [Tailwind CSS](https://tailwindcss.nuxtjs.org)
- [x] [nuxt-icon](https://github.com/nuxt-modules/icon)
- [x] [nuxt-security](https://github.com/Baroshem/nuxt-security) (among other things, it also offers an option to use Basic Auth authorization)

### 👉 Code quality and conventions

- [x] ESLint ([Nuxt ESLint module](https://eslint.nuxt.com/packages/module)), Stylelint and Prettier to check the source code for programmatic and stylistic errors, and format your code as recommended by Vue, Nuxt and Tailwind CSS
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

