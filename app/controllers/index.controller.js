exports.render = function(req, res) {
    //res.send('hello world');
    res.render('index',{
        'title' : 'Tert NodeJS Express',
        'message' : 'Tert NodeJS Express'
    });
}