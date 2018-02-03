const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function createPPT() {
  var pptx = new PptxGenJS();
  var slide = pptx.addNewSlide();
  slide.addText('Hello World!', { font_face: "Gothic", x:1.5, y:1.5, font_size:18, color:'363636' });
  pptx.save('Sample Presentationa');
}