# Toolbox

[![Build Status](https://img.shields.io/travis/iFixit/toolbox/master.svg?style=flat-square)](https://travis-ci.org/iFixit/toolbox)
[![Code Coverage](https://img.shields.io/codecov/c/github/iFixit/toolbox/master.svg?style=flat-square)](https://codecov.io/gh/iFixit/toolbox)


## What is Toolbox?

Toolbox is a library of reusable React components for [iFixit](https://ifixit.com).

https://ifixit.design

## Project Setup

1. Clone the repo.
```bash
git clone https://github.com/iFixit/toolbox.git
cd toolbox
```

2. Install the dependencies.
```bash
npm install
```

3. Start styleguide development server.
```bash
npm start
```

## Code Style

Toolbox adheres to the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). Code style and quality are enforced by [ESLint](http://eslint.org/) and [Prettier](https://github.com/prettier/prettier). You can format your code with the `lint:fix` script:

```bash
npm run lint:fix
```

## Commit Message Format

Toolbox adheres to the [Conventional Commits Specification](https://conventionalcommits.org/) for commit messages. Running `npm run cm` instead of `git commit` will guide you through the commit process.

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation
* **build**: Changes that affect the build system or external dependencies
* **ci**: Change to our CI configuration file and scripts

### Scope
The scope could be anything specifying place of the commit change. For example `Icon`,
`Tab`, `SearchInput`, etc...

You can use `*` when the change affects more than a single scope.


### Subject
The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Use sentence case
* No dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit closes.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

### Examples

Here are examples of the release types that will be generated based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): Stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): Add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): Remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |




### Why?

[`semantic-release`](https://github.com/semantic-release/semantic-release) uses commit messages to determine the type of changes in the codebase since the last release. Using these formalized conventions for commit messages allows [`semantic-release`](https://github.com/semantic-release/semantic-release) to automatically determine the next semantic version number, generate a changelog and publish a release automatically.

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

