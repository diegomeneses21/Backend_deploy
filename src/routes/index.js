const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countriesRouter');
const activitiesRouter = require('./activitiesRouter');

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routes.use('/countries', countriesRouter);
routes.use('/activities', activitiesRouter);

module.exports = routes;
