const { Country, Activity } = require('../db');

const getAllActivities = async () => await Activity.findAll();

const createActivity = async (name, difficulty, duration, season) =>
    await Activity.create({ name, difficulty, duration, season });

module.exports = { getAllActivities, createActivity };