# Install ESLint in your Typescript/Javascript React project

This is a quick example/boilerplate to install ESLint in your Typescript/Javascript React project and use it as a code formatter in VS Code.

This setup works with Javascript, Typescript, React and JSON files.

It's based on the Standard Javascript code style with a few tweaks (ie using double quotes instead of single quotes).

The recommended way to install ESLint is [following this documentation](https://eslint.org/docs/latest/use/getting-started) but you can use this boilerplate as starting point or as a complement to understand how this works all together.

## Set up ESLint

To use ESLint's Javascript/Typescript standard, you may add the following dev dependencies to your `package.json` file:

```json
{
  "devDependencies": {
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-json-format": "^2.0.1",
    "eslint-plugin-n": "^16.6.2",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "typescript-eslint": "^7.0.2",
    "prettier": "^3.2.5",
  }
}
```
or just add them using npm
```bash
npm i --save-dev eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-json-format eslint-plugin-n eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks typescript-eslint prettier
```
Add the following Lint scripts to your `package.json`:
```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx,css,md,json}\"",
    "lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx,css,md,json}\""
  }
}
```

Finally, copy the `.eslintrc.js` file at the root of your project.

You may then adjust the settings and the rules as you like.

## Set up project root

This step allows you to use absolute paths for includes in your project such as `components/SomeComponent` and get rid of annoying relative paths like `../../../SomeComponent`.

Open or create your `jsconfig.json` (for a Javascript project) file or `tsconfig.json` (for a Typescript project) then set the root folder for your code (in this example, `src`).

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```

## Set up VSCode

1. Install the `dbaeumer.vscode-eslint` extension.
2. Copy the `.vscode` folder at the root of your project.
3. Reload VSCode (open the Command Palette using Ctrl/Cmd + Shift + P then type `Reload Window`).
4. You may also need to edit the `.vscode/settings.json` file to match your preferences.

## Lint code
In an existing project, you may probably see a lots of errors and warnings. You can now perform a lint:fix to automatically prettify the code and start on a clean base.

```bash
npm run lint:fix
```

It's recommended that you push a commit with the `lint:fix`ed code for all active branches of your project to avoid merge conflicts.

## ESLint errors as warnings
The `lint:fix` script addresses most of the problems but some may need to be fixed manually, which can be a time consuming process.

The best practice is to "Clean as You Code" (CaYC) and only fix the code you modify.

To prevent ESLint from breaking your builds, you may add the following to your `.env` files:

### In development
```bash
# Enable ESLint
DISABLE_ESLINT_PLUGIN=false

# Display ESLint errors as warnings
ESLINT_NO_DEV_ERRORS=true
```

### In production
```bash
# Disable ESLint
DISABLE_ESLINT_PLUGIN=true
```