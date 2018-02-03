const express = require('express');
const fs = require('fs');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000

app.use(express.static('public'));

var tools = require('./app');

var PptxGenJS;
if (fs.existsSync('../dist/pptxgen.js')) {
	PptxGenJS = require('bower_components/pptxgenjs/dist/pptxgen.js');
	if (gConsoleLog) console.log('-=TEST MODE=- (bower_components/pptxgenjs/dist/pptxgen.js)');
}
else {
	PptxGenJS = require("pptxgenjs");
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(('/bower_components',  express.static(__dirname + '/bower_components')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/ppt', (req, res) => res.render('pages/download'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/ppt', function(req, res) {
    var pptx = new PptxGenJS();
    var slide = pptx.addNewSlide();
    slide.addText('Hello World!', { font_face: "Gothic", x:1.5, y:1.5, font_size:18, color:'363636' });
    pptx.save('Sample Presentation');
});