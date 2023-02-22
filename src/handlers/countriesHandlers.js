const { getAllCountries, getCountryByName, getCountryById } = require('../controllers/countriesControllers');

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = (name) ? await getCountryByName(name) : await getAllCountries();
        if (!results.length) res.status(404).send('Not found!');
        else res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const getCountryHandler = async (req, res) => { // Incluir datos de las actividades turisticas
    const { idCountry } = req.params;
    try {
        const results = await getCountryById(idCountry);
        if (!results.length) res.status(404).send('Not found!');
        else res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getCountriesHandler,
    getCountryHandler
};