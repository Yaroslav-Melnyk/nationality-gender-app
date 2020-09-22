import axios from 'axios';

interface Country {
    country_id: string,
}
interface CountryResponse {
    data: {
        country: [Country],
    }
}
interface GenderResponse {
    data: {
        gender: string,
    }
}

export default async function getNameInfo(name: string) {
    const countryRequest = axios.get(`https://api.nationalize.io/?name=${name}`);
    const genderRequest = axios.get(`https://api.genderize.io/?name=${name}`);
    let countryResponse: CountryResponse = {data:{country:[{country_id:''}]}};
    let genderResponse: GenderResponse = {data:{gender:''}};
    await axios.all([countryRequest, genderRequest]).then(axios.spread((...responses) => {
        countryResponse = responses[0];
        genderResponse = responses[1];
    })).catch(errors => {
        // some perfect error handling
    });
    if(!countryResponse.data.country.length || !genderResponse.data) {
        return ['',''];
    }
    return [countryResponse.data.country[0].country_id, genderResponse.data.gender];
}