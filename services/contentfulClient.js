var contentful = require('contentful');

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_API_KEY
});

exports.client = client;