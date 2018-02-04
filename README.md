# Wiki to PowerPoint
Created during [FemmeHacks](femmehacks.io) 2018.
Slides from our demo: https://docs.google.com/presentation/d/1A0iEr0tg_DKHuQhP4UAHI98qGhSjpMuVm6NtuZm3lo0/edit?usp=sharing
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
Be able to input any type of article, not just from Wikipedia, most likely incorporating Natural Language Processing to discern important information. More design options for the PowerPoint like fonts/colors/themes and animations.

THANK YOU TO ALL THE MENTORS WHO HELPED <3


This application was started using Heroku's [getting started with nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs) project files. 

