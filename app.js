const express = require('express');
const fs = require('fs');

// var PptxGenJS;
// if (fs.existsSync('../dist/pptxgen.js')) {
// 	PptxGenJS = require('bower_components/pptxgenjs/dist/pptxgen.js');
// 	if (gConsoleLog) console.log('-=TEST MODE=- (bower_components/pptxgenjs/dist/pptxgen.js)');
// }
// else {
// 	PptxGenJS = require('pptxgenjs');
// }

PptxGenJS = require('pptxgenjs');

var pptx = new PptxGenJS();
var slide = pptx.addNewSlide();
slide.addText('sfhalsjflj', { font_face: "Gothic", x:1.5, y:1.5, font_size:18, color:'363636' });
pptx.save('Sample Presentation');