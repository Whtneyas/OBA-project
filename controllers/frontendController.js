const obaService = require('../services/oba');

exports.index = function (req, res) {
    res.render('pages/index');
};

exports.favorite = function (req, res) {
    res.render('pages/favorite');
};

exports.details = async function (req, res) {
    const id = req.params.id;

    // /details/3453456
    // make sure there's an id
    if (!id) {
        return res.status(400).send('No id provided');
    }

    // gets data from obaService in function getDetails
    const record = await obaService.getDetails(id);

    console.log('Rendering record', record);

    res.render('pages/details', { record });
};



exports.addToFavorites = async function (req, res) {
    const id = req.body.id;
  
    if (!id) {
      return res.status(400).send('No ID provided');
    }
  
    // Save the book ID to favorites or perform any other desired actions
    // You can use a database or a file to store the favorite books
  
    return res.sendStatus(200);
  };
