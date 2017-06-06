# packages-list-extractor
A simple node module that extracts npm packages from package.json with multiple options.

## Getting Started
- Run `npm i -g packages-list-extractor`
- In your project directory run `packages-list-extractor`
- This will generate a file called dependancies.md in your app's root directory.

## Path Customization
The `packages-list-extractor` takes 2 argumnets.  
The first being the file path to write to, defaults to 'dependencies.md'.  
The second being the file path to package.json, defaults to 'package.json'.  
To fallback to default arguments, add -d as the argument.

## Template Customization
Run `git clone https://github.com/A-Tokyo/packages-list-extractor`  
Edit the template text in `src/index.js`  
Run `npm link`  
Use as mentioned in the getting started section.  

## Examples:
- `packages-list-extractor` Runs with default paths.
- `packages-list-extractor -d assets/filename.md` Runs with default path for `package.json` and writes into `assets/filename.md`
- `packages-list-extractor ../../package.json` Runs on `../../package.json` and writes to the default path `dependancies.md`.

#### dependancies.md file preview:

```
# Dependancies:
Package Name: package-name, Package Url: https://www.npmjs.com/package/package-name, Version: ^1.0.0
# Dev Dependancies:
Package Name: dev-package-name, Package Url: https://www.npmjs.com/package/dev-package-name, Version: ^1.0.0
```
