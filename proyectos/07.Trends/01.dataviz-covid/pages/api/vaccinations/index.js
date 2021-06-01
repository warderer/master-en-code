const CountryVaccinations = require('../../../models/CountryVaccinations');

export default async function handler(req, res) {
    console.log(req.url);
    try {
        const dataset = await CountryVaccinations().allData();
        res.status(200).json(dataset);
    } catch (error) {
        res.status(400).json(error.message);
    }

}