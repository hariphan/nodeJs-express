module.exports = function(app) {
    var index = require('../controllers/index.controller');
    app.get('/home', index.render);
};