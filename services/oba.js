const jwt = require('jsonwebtoken');
const axios = require('axios');

const BASE_URL = 'https://zoeken.oba.nl/api/v1';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

function createBearerToken() {
    const secret = process.env.SECRET;
    const publicKey = process.env.PUBLIC_KEY;

    const expiresInMinutes = 15;

    const expirationDate =
        Math.floor(Date.now() / 1000) + expiresInMinutes * 60;

    const payload = {
        key: publicKey,
        exp: expirationDate,
        description: 'HvA_student',
    };

    const token = jwt.sign(payload, secret);

    return `Bearer ${token}`;
}

// entities is an object from openai.js that has a type and topic
exports.search = async function (entities) {
    const token = createBearerToken();
    // if facet is not null (true) then it will be a string of facet=type(entities), otherwise if it's null it will be an empty string
    const facet = entities.type ? `&facet=type(${entities.type})` : '';

    const url = `/search/?q=${entities.topic}${facet}&output=json`;
    // check if facet=website when looking for news
    console.log('Fetching from OBA', url);

    // entities that is found from the input is being put in the link
    const response = await api.get(url, {
        headers: { Authorization: token },
    });

    return response.data.results;
};

exports.getDetails = async function (id) {
    const token = createBearerToken();

    const response = await api.get(`/details/?id=${id}&output=json`, {
        headers: { Authorization: token },
    });

    return response.data.record;
};



