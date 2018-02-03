const express = require('express');
const fs = require('fs');

var PptxGenJS;
if (fs.existsSync('../dist/pptxgen.js')) {
	PptxGenJS = require('bower_components/pptxgenjs/dist/pptxgen.js');
	if (gConsoleLog) console.log('-=TEST MODE=- (bower_components/pptxgenjs/dist/pptxgen.js)');
}
else {
	PptxGenJS = require('pptxgenjs');
}

        
