# Lyef React Component
[![Build Status](https://travis-ci.org/lyef/lyef-react-component.svg)](https://travis-ci.org/lyef/lyef-react-component/)
![Minified component file size](https://badge-size.herokuapp.com/lyef/lyef-react-component/master/dist/Component.min.js.svg)
![Gziped component file size](https://badge-size.herokuapp.com/lyef/lyef-react-component/master/dist/Component.min.js.svg?compression=gzip)

## Stack

- [React/React-DOM/React-addons-test-utils 15.x](https://facebook.github.io/react/)
- [Babel 6](https://babeljs.io/) - Javascript Compiler.
- [React Storybook](https://github.com/kadirahq/react-storybook) - Isolated environment for your components.
- [Eslint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX.
- [Husky](https://github.com/typicode/husky) - Git hooks made easy.
- [Mocha](https://mochajs.org/) - JavaScript test framework.
- [Chai](http://chaijs.com/) - BDD / TDD assertion library.
- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript.
- [Nyc](https://github.com/istanbuljs/nyc) - Istanbul command line interface.
- [Enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React.
- [JSDOM](https://github.com/tmpvar/jsdom) - A JavaScript implementation of the WHATWG DOM and HTML standards.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

```sh
# install dependencies
$ npm install
```

### Folders and Files

```sh
├── css
│   └── main.css
├── src
│   └── Main.js
├── stories
│   └── Main.js
├── storybook
│   ├── config.js
│   └── webpack.config.js
├── tests
│   ├── helpers
│   │   └── setup.js
│   └── specs
│       └── Main.spec.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmignore
├── .travis.yml
├── CONTRIBUTING.md
├── LICENSE.md
├── Readme.md
└── package.json
```

### How to Develop with Storybook

Create your [storybook stories](https://github.com/kadirahq/react-storybook/blob/master/docs/writing_stories.md) on `stories` folder. If you want to create another story file, remember to load on `.storybook/config.js`. With all stories, just run `npm run storybook` to open your isolated environment.

If you want to know more about storybook, [see this link](https://github.com/kadirahq/react-storybook).

### Code Standarts

This project uses [eslint](http://eslint.org/) and [.editorconfig](http://editorconfig.org/) is defined to have indent_size of **4 spaces**.

This project also uses [Husky](https://github.com/typicode/husky) to prevent push messy and wrong code. Please, don't be stupid, fix all errors before push =D

### Tasks

* `npm start`: start to develop on storybook.
* `npm run build`: build component to external use.
* `npm run pub`: build and publish the component to npm.
* `npm run storybook`: launch storybook to develop your component.
* `npm run build-storybook`: build an static storybook to `.out` folder.
* `npm run deploy-storybook`: build and deploy a storybook with component to gh-pages.
* `npm run test`: run all specs.
* `npm run test:tdd`: run all specs and watch.
* `npm run test:coverage`: run all specs and coverage.
* `npm run lint`: lint all files searching for errors.
* `npm run lint:fix`: fix some lint errors.

## License

[MIT License](https://github.com/lyef/lyef-react-component/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io)
