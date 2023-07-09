const obaService = require('../services/oba');

exports.index = function (req, res) {
    res.render('pages/index');
};

exports.favorite = function (req, res) {
    const favoriteContent = req.session.favoriteContent || null;
    res.render('pages/favorite', { favoriteContent });
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

    res.render('pages/details', {
        record
    });
};



