This is an opinionated set of ESLint rules.

## Usage

The following steps need to be performed in order to use this package:

1. Install the package
2. Create a `.prettierrc.js` file
3. Create a `.eslintrc.js` file
4. Update your `tsconfig.json` file
5. (Optional) Add a lint script to `package.json`
6. (Optional) Install VSCode extensions

### 1. Install the package

First, install this package:

```
npm install --save-dev eslint-config-mbuchalik
```

### 2. Create the `.prettierrc.js` file

Create a `.prettierrc.js` file in the root of your project. The content of this file:

```js
module.exports = require('eslint-config-mbuchalik/.prettierrc.js');
```

### 3. Create the `.eslintrc.js` file

Next to your Prettier file, create a file called `.eslintrc.js`. For a regular TypeScript-only project, use the following config:

```js
module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['eslint-config-mbuchalik'],
    },
  ],
};
```

For a TypeScript+React project, use the following config:

```js
module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['eslint-config-mbuchalik/react'],
    },
  ],
};
```

Tip: If you want to lint a specific directory only (e.g. only a `src/` directory), add the following:

```diff
module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

+ // Ignore all folders except for '/src'.
+ ignorePatterns: ['/*', '!/src'],

  overrides: [
    {
      files: ['*.ts'],
      extends: ['eslint-config-mbuchalik'],
    },
  ],
};
```

### 4. Update your `tsconfig.json` file

Make sure that your `tsconfig.json` file contains the following settings:

```jsonc
{
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true

    // Other project-specific settings.
  }
}
```

### 5. (Optional) Add a lint script to `package.json`

Often, you want to be able to lint your files by running a CLI command. This is particularly useful in CI environments. To do so, add the following to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings=0"
  }
}
```

### 6. (Optional) Install VSCode extensions

Are you using VSCode? If so, then it is recommended to install the following extensions:

- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Tip: You can enable auto formatting on save by creating a `.vscode/settings.json` file with the following content:

<details>

```jsonc
{
  "eslint.validate": ["typescript"],
  "typescript.preferences.importModuleSpecifier": "relative",
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[dockercompose]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll.format", "source.fixAll.eslint"]
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll.format", "source.fixAll.eslint"]
  },
  "[yaml]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

</details>

## Development

Are you working on your own fork of this project? Great! The following is a (very short) guide that might help you with you development setup.

First, fork this project and install all npm dependencies.

Now, you can apply your intended changes to the ESLint config files. The files are called `index.js` (for the TypeScript-only project) and `react.js` (for the TypeScript+React project).

Once you are happy with your changes, it is highly recommend to test them locally. To do so, create a new project outside the folder of `eslint-config-mbuchalik`. In the following, we call this project `test-project`. Now perform the following steps:

1. In the `eslint-config-mbuchalik` folder, run `npm pack`. This will create a file ending on `.tgz`. The generated file is pretty much the same you get when pulling from a registry.
2. In `test-project`, run `npm install --save-dev ../eslint-config-mbuchalik/eslint-config-mbuchalik-<version>.tgz`. In this command, you need to replace `<version>` with the actual version of the package. Also, it might be necessary to adjust the relative file path.
3. Now, you can use the package as if it was installed from an actual registry.
4. Tip: If you make changes and need to rerun `npm pack` and all other steps, you might get an error regarding package integrity when running `npm install` in `test-project`. This is an expected error, because the hash of the package changes. A pretty easy solution to this is to remove the reference to `eslint-config-mbuchalik` from `package.json` in `test-project`, then to run `npm install`, and then to re-install the package. If you need to do this frequently, you could also symlink the package, but that might require you to install peer dependencies manually.
