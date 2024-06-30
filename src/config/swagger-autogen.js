import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Login',
    description: 'Description'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.js']; // Ajusta la ruta según tu estructura de proyecto

swaggerAutogen()(outputFile, routes, doc);