var basePath23 = '/interfacePath';
var path44 = basePath23 + '/44';
var path45 = basePath23 + '/45';

module.exports = function(baseUrl, app) {
    
    app.get(path44, (req, res) => {
        res.send('u have hit path44, waituuuu');
    })

    app.get(path45, (req, res) => {
        res.send('u have hit path45, chuddaamuuu');
    })
}