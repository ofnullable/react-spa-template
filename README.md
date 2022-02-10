<h1 align="center">🎉 React SPA Template 🎉</h1>

<p align="center">  
  <img src="https://img.shields.io/github/license/ofnullable/react-spa-template" />
  <a href="https://github.com/ofnullable/react-spa-template/issues">
    <img src="https://img.shields.io/github/issues/ofnullable/react-spa-template" />
  </a>
</p>

## An easy-to-use react template

- React Single-Page-Application template without create-react-app
- Configured with Webpack, Babel, ESLint, Sass, PostCSS and emotion
- If you need anything else, please contribute or leave an issue!

## Live demo

[https://ofnullable.github.io/react-spa-template](https://ofnullable.github.io/react-spa-template)

## Installation

```shell
# clone this repository
$ git clone https://github.com/ofnullable/react-spa-template

# go into template directory
$ cd react-spa-template

# install dependencies
$ npm install
```

## Commands

### Run dev server

```shell
$ npm start
```

Run dev server on [http://localhost:8080](http://localhost:8080)

### Build

```shell
$ npm run build
```

Creating a Production Build. The build artifacts will be stored in the `dist/` directory.

### Deploy github pages

```json
# edit package.json
{
  ...
  "hompage": "https://{github username}.github.io/{repository name}",
}
```

```shell
$ npm run deploy
```

Deploy to github pages
