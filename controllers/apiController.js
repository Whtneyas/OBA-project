const obaService = require('../services/oba');
const openAiService = require('../services/openai');

// const favorites = []; 

// if you write something in line it shows up in http://localhost:4400/api/example
// in frontend: fetch(/api/example)
exports.getExample = function (req, res) {
    res.json({
        hello: 'idk'
    });
};

// send http to api with fetch
exports.postExample = function (req, res) {
    res.json({});
};

// POST /api/search
exports.search = async function (req, res) {
    // Get data from request
    const query = req.body.query;

    console.log('query', query);

    // No query: send back error to frontend
    if (!query) {
        return res.status(400).send('No query provided');
    }

    const entities = openAiService.parseQuery(query);

    // entities is an object containing type and topic from openai.js (faking it, chatgpt is supposed to do this)
    const results = await obaService.search(entities);

    // Give back results
    return res.json(results);
};

// GET /api/details?id=
exports.getDetails = async function (req, res) {
    // Get data from request
    const id = req.query.id;

    console.log('id', id);

    // No query: send back error to frontend
    if (!id) {
        return res.status(400).send('No id provided');
    }

    // const entities = openAiService.parseQuery(query);
    const record = await obaService.getDetails(id);

    // Give back results
    return res.json(record);
};



exports.addToFavorites = function (req, res) {
  const favoriteContent = req.body.favoriteContent;

  if (!favoriteContent) {
    return res.status(400).send('No favorite content provided');
  }

  req.session.favoriteContent = favoriteContent;
  res.sendStatus(200);
};
