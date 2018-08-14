# Simple website template with Contentful

Created by Nina Cecilie Højholdt

### Setup info 🍊 ###

[Contentful](https://www.contentful.com/) is a flexible API-call based CMS, where you define your own content types. 
This setup uses a space with a single content type, *Example*, which has three fields: *title*, *description* and *image*. Make your own, or have Nina give you access to hers :)

This setup uses NodeJS, and [ExpressJS](http://expressjs.com/) is used for routing.  
 [EJS](http://www.embeddedjs.com/) is used as the templating language.

GulpJS is used for SCSS compiling and JS minifying, and a .gulpfile for this is included.

The template also comes with jQuery and an empty JS file included.


### Setting up the project ###
- Download/fork the repo, navigate to it, and run *npm install* in the terminal  
(make sure you have node installed first)

- Create a file called *.env* which contains the following two lines, and add your info from Contentful:
  - CONTENTFUL_API_KEY='your_key_here'
  - CONTENTFUL_SPACE_ID='your_space_id_here'

- To start the server, run *npm start* in the terminal. Navigate to http://localhost:7000/ and everything should be working 🙏 

Going to http://localhost:7000/ will render the index.ejs file.
Going to http://localhost:7000/example will render the example.ejs file, and include all data of the type *Example* from Contentful.


To use the gulp setup, run *gulp* in another terminal tab.
I recommend installing the [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) Chrome plugin, which works with the gulp task.
