const CountryVaccinations = require('../../../../models/CountryVaccinations');

export default async function handler(req, res) {
    //console.log(req.url);
    //console.log(req.query)
    try {
        const dataset = await CountryVaccinations().VaccinationsByCountryIsoCode(req.query.iso);
        res.status(200).json(dataset);
    } catch (error) {
        res.status(400).json(error.message);
    }

}