import { csv } from 'd3';

const url =
    process.env.NODE_ENV === "development"
        ? 'http://localhost:3000'
        : process.env.VERCEL_URL;

const dataPath = `${url}/data/country_vaccinations.csv`;

const CountryVaccinationsModel = () => {

    const allData = async () => {
        console.log('Ejecute All data')
        try {
            const dataset = await csv(dataPath);
            //console.log('dataset',dataset)
            return dataset;
        } catch (err) {
            return err;
        }
    };

    const VaccinationsByCountryIsoCode = async (countryIso) => {
        try {
            const dataset = await csv(dataPath);
            const countriesFilter = dataset.filter((record)=>{
                return record.iso_code.toLowerCase() === countryIso.toLowerCase();
            });
            return countriesFilter;
        } catch (err) {
            return err;
        }
    }

    return {
        allData,
        VaccinationsByCountryIsoCode
    }

}

module.exports = CountryVaccinationsModel;