const { Router } = require('express');
const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandlers');
const validate = require('../middlewares/validate');

const activitiesRouter = Router();

activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.post('/',validate, createActivityHandler);

module.exports = activitiesRouter;