var express = require('express');
var app = express();
var port = 3000;

var sizes = [
        [320, 480],
        [320, 568],
        [600, 1024],
        [1024, 768],
        [1280, 800],
        [1440, 900]
    ];

sizes = sizes.map(function(el) {
	return el.join("x");
})

console.log(sizes);

app.use(express.static('./screenshots'));

app.get('/', (request, response) => {
	response.render('index', { sizes: sizes} );
});

app.set('view engine', 'jade');

app.listen(port, function() {
	console.log(`Server listening on ${port}`);
});


