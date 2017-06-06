#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

Main();

function Main() {
  let package = null;
  let packagePath = path.join(process.cwd(), 'package.json');
  let fileText = '';
  let filePath = path.join(process.cwd(), 'dependencies.md');

  if(process.argv[2] && process.argv[2] != '-d'){
    filePath = path.join(process.cwd(), process.argv[2]);
  }
  if(process.argv[3] && process.argv[3] != '-d'){
    packagePath = path.join(process.cwd(), process.argv[3]);
  }

  try {
    package = require(packagePath);
  } catch (e) {
    console.warn('Error reading package.json');
    console.error(e);
    return;
  }

  if(package.dependencies){
    fileText = '# Dependancies: \n';
    fileText += packagesToFileText(package.dependencies);
  }

  if(package.devDependencies){
    fileText += '# Dev Dependancies: \n';
    fileText += packagesToFileText(package.devDependencies);
  }

  fs.writeFileSync(filePath, fileText);
}

function packagesToFileText (dependencies) {
  const keysArray = Object.keys(dependencies);
  let text = '';
  for (let i = 0; i < keysArray.length; i++) {
    const line = `Package Name: ${keysArray[i]}, Package Url: https://www.npmjs.com/package/${keysArray[i]}, Version: ${dependencies[keysArray[i]]} \n`;
    text += line;
  }
  return text;
}
