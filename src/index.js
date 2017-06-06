const fs = require('fs');
const path = require('path');

Main();

function Main() {
  let package = null;
  try {
    package = require(path.join(process.cwd(), 'package.json'));
  } catch (e) {
    console.log('Error reading package.json');
    console.log(e);
    return;
  }

  let fileText = '';

  if(package.dependencies){
    fileText = '# Dependancies: \n';
    fileText += packagesToFileText(package.dependencies);
  }

  if(package.devDependencies){
    fileText += '# Dev Dependancies: \n';
    fileText += packagesToFileText(package.devDependencies);
  }

  fs.writeFileSync(path.join(process.cwd(), 'dependencies.md'), fileText);
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
