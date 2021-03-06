# Wiki to PowerPoint
Created during [FemmeHacks](https://femmehacks.io) 2018.
Slides from our demo: https://goo.gl/y1pzHB
## Inspiration
Creating a powerpoint should be simple. We wanted to create a boilerplate for powerpoint generation using Wikipedia content.

## What it does
User types in the name of the article, chooses some options for design, and then clicks download to get their generated powerpoint!

## How we built it
Front-end: EJS, HTML, CSS, Bootstrap  
Back-end: Node.js, Express, EJS, PptxGenJS (PowerPoint generation library), WTF-Wikipedia (Wikipedia scraping library)

## Challenges we ran into
Integrating each of our roles (one on front-end, one on PPT library, one for Wiki) into the main product.
Getting something that worked locally to work on our deployed Node instance on Heroku

## Accomplishments that we're proud of
Successfully passing in the values obtained from the Wikipedia scraper to the PPT generator

## What we learned
Everything. Front-end and back-end development. What HTTP requests are, how to create a Node app, working with external libraries.

## What's next for wiki-to-ppt
Step 2: Optimize the resulting powerpoint based on the type of article. Right now it is best suited for articles about people, i.e. JK Rowling. Add more design functionality rather that just black text on white background.  
 
Step 3: Processing the entire article using NLP to extract other details rather than relying on the key facts box.  
 
Future: Be able to input any type of article, not just from Wikipedia, most likely incorporating Natural Language Processing to discern important information. More design options for the PowerPoint like fonts/colors/themes and animations. 
 

THANK YOU TO ALL THE MENTORS WHO HELPED <3


This application was started using Heroku's [getting started with nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs) project files. 

