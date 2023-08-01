# NPM Workspaces Template with TypeScript

This is a template of a monorepo project with NPM workspaces, TypeScript, Prettier, and ESLint. This project provides a structured and streamlined development environment for managing multiple interrelated packages within a single repository.

## Prerequisites

Before you get started, make sure you have the following installed on your system:

- Node.js (with npm)
- Your preferred text editor or IDE with TypeScript support

## NPM Workspaces

NPM workspaces allow to manage multiple packages within the monorepo. All packages share a common `node_modules` directory at the root level, enabling seamless collaboration and reducing duplication of dependencies.

## Getting Started

Follow these steps to set up and run the project:

```bash
git clone https://github.com/jpinilloslr/ts-npm-workspaces-template.git
cd ts-npm-workspaces-template
npm install
```

## Scripts

The following npm scripts are available for your convenience:

- **build**: Compiles the project.
- **watch**: Automatically recompiles whenever changes are made to the source code.
- **lint**: Lints your code using ESLint to identify and fix issues.
- **prebuild**: Runs ESLint to check for linting issues before compilation.

Feel free to modify this template to start building your Node.js application with workspaces.

## Reference Article

This project is based on the setup described in this article: [NPM Workspaces with TypeScript](https://gist.github.com/jpinilloslr/b2d88e39c49ce56161764d8e06e82c49)
