# Toolbox

[![Build Status](https://img.shields.io/travis/iFixit/toolbox/master.svg?style=flat-square)](https://travis-ci.org/iFixit/toolbox)

## What is Toolbox?

Toolbox is a library of reusable React components for [iFixit](https://ifixit.com).

https://ifixit.design

## Project Setup

1. Clone the repo.
```
git clone https://github.com/iFixit/toolbox.git
cd toolbox
```

2. Install the dependencies.
```
npm install
```

3. Start styleguide dev server.
```
npm run styleguide
```

## Code Style

Toolbox adheres to the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). Code style and quality are enforced by [ESLint](http://eslint.org/) and [Prettier](https://github.com/prettier/prettier). You can format your code with the `lint:fix` script:

```
npm run lint:fix
```

## Testing

Toolbox uses [Jest](https://facebook.github.io/jest/) for testing. Learn more about testing React with Jest here: [Jest – Testing React Apps](https://facebook.github.io/jest/docs/en/tutorial-react.html)

### How do I run the tests?

To run the test suite, use one of the following npm scripts:

```bash
# Run the test suite
npm test

# Run the test suite in watch mode (recommended during development)
npm run test:watch

# Update Jest snapshots
npm run test:update

# Run the test suite and generate a code coverage report
npm run test:coverage
```

### Where should I place new tests?

Place `*.test.jsx` files in the same directory as the corresponding component. Example:

```
src/
  Icon/
    Icon.jsx
    Icon.test.jsx
    ...
```
