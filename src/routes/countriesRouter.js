const { Router } = require('express');
const { getCountriesHandler, getCountryHandler } = require('../handlers/countriesHandlers')

const countriesRouter = Router();

countriesRouter.get('/', getCountriesHandler);

countriesRouter.get('/:idCountry', getCountryHandler);

module.exports = countriesRouter;