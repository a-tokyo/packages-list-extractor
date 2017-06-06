# packages-list-extractor
A simple node module that extracts npm packages from package.json with multiple options.

## Getting Started
- Run `npm i -g packages-list-extractor`
- In your project directory run `packages-list-extractor`
- This will generate a file called dependancies.md in your app's root directory.

## Customization
The `packages-list-extractor` takes 2 argumnets.  
The first being the file path to write to, defaults to 'dependencies.md'.  
The second being the file path to package.json, defaults to 'package.json'.  

#### dependancies.md file preview:

```
# Dependancies:
Package Name: package-name, Package Url: https://www.npmjs.com/package/package-name, Version: ^1.0.0
# Dev Dependancies:
Package Name: dev-package-name, Package Url: https://www.npmjs.com/package/dev-package-name, Version: ^1.0.0
```
