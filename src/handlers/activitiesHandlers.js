const { getAllActivities, createActivity } = require('../controllers/activitiesControllers');

const getActivitiesHandler = async (req, res) => {
    try {
        const results = await getAllActivities();
        if (!results.length) res.status(404).json({ message: 'No activities found!' })
        else res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const createActivityHandler = async (req, res) => { // relacionar con los paises
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const newActivity = await createActivity(name, difficulty, duration, season);
        newActivity.addCountries(countries);
        // res.status(200).json(newActivity);
        res.status(200).send("Activity created successfully!!!")
    } catch (error) {
        // res.status(400).json({ error: error.message });
        res.status(400).send("Ocurrio algo inesperado!!!");
    }
};

module.exports = {
    getActivitiesHandler,
    createActivityHandler
};