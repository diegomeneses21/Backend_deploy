const axios = require('axios');
const { Country, Activity } = require('../db');

const getAllCountries = async () => {
    const validate = await Country.findAll();
    if (!validate.length) {
        const apiCountriesRaw = (await axios.get("https://restcountries.com/v3/all")).data;
        await Country.bulkCreate(apiCountriesRaw.map(c => {
            return {
                id: c.cca3 ? c.cca3 : c.cico,
                name: c.name.common,
                image: c.flags[1],
                continent: c.continents[0],
                capital: c.capital != null ? c.capital[0] : 'Not Found',
                subregion: c.subregion,
                area: c.area,
                population: c.population
            }
        }));
    }
    return await Country.findAll({
        include: Activity
    });
};

const getCountryByName = (name) => {
    return Country.findAll({ where: { name: name } })
};

const getCountryById = (idCountry) => {
    return Country.findAll(
        {
            where: { id: idCountry },
            include: { model: Activity },
        }
    );
}

module.exports = {
    getAllCountries,
    getCountryByName,
    getCountryById
};