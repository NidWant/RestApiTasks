//commonjs
/* const express = require('express'); const app = express(); */
//Babel convertir código moderno a código de navegadores npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
//npx ejecuta determinado comando: npx babel-node src/index.js
//Ejecutar código de ecmascript6
import app from './app'
import './database'

app.listen(app.get('port'));

console.log('Server on Port', app.get('port'));

