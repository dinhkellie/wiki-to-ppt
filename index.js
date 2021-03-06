const express = require('express');
const fs = require('fs');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
var wtf = require('wtf_wikipedia');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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


//https://stackoverflow.com/questions/247483/http-get-request-in-javascript
function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( "" );
  return xmlHttp.responseText;
}


// From w3resource
function strip(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
function makeGrammaticallyCorrectList(str){
  //makes sure commas and 'ands' are in the correct place
  var numPipes = str.split('|').length-1;
  var numCommas = str.split(',').length-1;
  if (numPipes == 0 && numCommas > 0) {
    var indexOfLastComma = str.lastIndexOf(',');
    var newStr = str.slice(0,indexOfLastComma).concat(", and ",str.slice(indexOfLastComma+1));
    str = newStr.toLowerCase();
  }
  else if (numPipes == 1){
    str = str.replace('|'," and ");
  } else {
    var counter = 0;
    for (var i=0;i<str.length;i++){
      if (str[i]=='|'){
        if (counter < numPipes){
          str[i] = ", ";
        } else {
          str[i] = ", and "
        }
      }
    }
  }
  return str;
}


express()
.use(express.static(path.join(__dirname, 'public')))
.use(('/bower_components',  express.static(__dirname + '/bower_components')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => {
  return res.render('pages/index')
})
.get('/ppt', (req, res) => {
  var person = req.query["person"];
  var xml = httpGet("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+person);
  var json = JSON.parse(xml);
  try {
    var wiki_name = json.query.search[0].title;
  } catch(error) {
    var wiki_name = "";
  }

  console.log("worked?:",person);
  wtf.from_api(wiki_name, 'en', function(markup) {
    var data = wtf.parse(markup);
    var full_json = data.infoboxes[0].data;

    try {
      var birth_date = full_json.birth_date.text;
      birth_date = birth_date.split("|");
      for (i=0;i<birth_date.length; i++){
        if (!isNaN(birth_date[i])){
          birth_date = strip(birth_date[i]);
          break;
        }
      }
    } catch(error){
      var birth_date = "";
    }
    try {
      var death_date = full_json.death_date.text;
      death_date = death_date.split("|");
      for (i=0;i<death_date.length; i++){
        if (!isNaN(death_date[i])){
          death_date = strip(death_date[i]);
          break;
        }
      }
    } catch(error){
      var death_date = "";
    }

    try {
      var birth_name = strip(full_json.birth_name.text);
    } catch(error){
      var birth_name = "";
    }

    try {
      var birth_place = strip(full_json.birth_place.text);
    } catch(error){
      var birth_place = "";
    }

    try {
      var pseudonym = full_json.pseudonym.text;
      pseudonym = strip(makeGrammaticallyCorrectList(pseudonym));
    } catch(error){
      var pseudonym = "";
    }

    try {
      var image_name = strip(full_json.image.text);
      var image_url = ("https://en.wikipedia.org/wiki/"+wiki_name+"#/media/File:"+image_name).replace(' ','_').replace('\ ','_');
    } catch(error){
      var image_name = "";
      var image_url = "";
    }

    try {
      var education = full_json.education.text;
      var indexOfParen = education.indexOf('(');
      var indexOfPipe = education.indexOf('|');
      // if (index != -1){
      //   highest_degree = education.slice(index);
      //   highest_degree = highest_degree.replace('(','');
      //   highest_degree = highest_degree.replace(')','');
      //   highest_degree = highest_degree.split(',');
      //   for (var j=0;j<highest_degree.length;j++){
      //     if (isNaN(highest_degree[j])){
      //       highest_degree = strip(highest_degree[j]);
      //       break;
      //     }
      //   }
      education = strip(education.slice(indexOfPipe+1,indexOfParen));
      // }
    } catch(error){
      var education = "";
      // var highest_degree = "";
    }

    try {
      var occupation = full_json.occupation.text;
      occupation = strip(makeGrammaticallyCorrectList(occupation));
    } catch(error){
      try {
        var occupation = full_json.office.text;
        occupation = strip(makeGrammaticallyCorrectList(occupation));
      } catch(error){
        var occupation = "";
      }
    }

    try {
      var notable_for = strip(full_json.notableworks.text);
    } catch(error){
      try {
        var notable_for = strip(full_json.known_for.text);
      } catch(error) {
        var notable_for = "";
      }
    }

    try {
      var website = strip(full_json.website.text);
      var webList = website.split('|');
      var newListString = "";
      var counter = 0;
      for (var i=0;i<webList.length;i++){
        if (webList[i].includes('.')){
          if (counter == 0){
            newListString = newListString.concat(webList[i]);
          } else {
            newListString = newListString.concat(", ",webList[i]);
          }
          counter++;
        }
      }
      if (counter>2){
        var lastComma = newListString.lastIndexOf(',');
        website = "".concat(newListString.slice(0,lastComma+1)," and",newListString.slice(lastComma+1));
      } else {
        website = newListString;
      }
    } catch(error) {
      var website = "";
    }

    console.log("User typed:",person);
    console.log("Wikipedia name:",wiki_name);
    console.log("Year of birth:",birth_date);
    console.log("Year of death:",death_date);
    console.log("Name at birth:",birth_name);
    console.log("Location of birth:",birth_place);
    console.log("Pseudonyms:",pseudonym);
    console.log("Image url:",image_url);
    console.log("Education:",education);
    // console.log("Degree earned:",highest_degree);
    console.log("Occupation:",occupation);
    console.log("Notable for:",notable_for);
    console.log("Website:",website);

    // console.log(data.infoboxes[0]);
    // res.render('pages/index', {
    //   tagline: full_json
    // });
    return res.render('pages/download', {
      person: person,
      wiki_name: wiki_name,
      birth_date: birth_date,
      death_date: death_date,
      birth_name: birth_name,
      birth_place: birth_place,
      pseudonym: pseudonym,
      image_url: image_url,
      education: education,
      occupation: occupation,
      notable_for: notable_for,
      website: website

    });
  })
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
