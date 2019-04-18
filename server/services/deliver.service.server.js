module.exports = function(app) {
    const https = require('https');
    // api list

    app.post('/api/deliver/getdistance', calculateDistance);

    // function list
    function calculateDistance(req, res) {
        let link = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='
        + req.body.lat + ',' + req.body.lng
        + '&destinations='
        + req.body.destination
        +'&key=AIzaSyBtrCeFbuL6cSgjC2UyJsaJuJoXKXAmQQM';
        link = link.replace(/#/gi, '');
        https.get(
            link,
            (resp) => {
                let temp = '';
                resp.on('data', (chunk)=>{
                    temp = chunk;
                });
                resp.on('end', ()=>{
                    console.log(JSON.parse(temp));
                    res.send(JSON.parse(temp).rows.shift().elements.shift());
                });
            }
        );
    }
}