const Instafeed = require("instafeed.js");

export default function getPosts() {
    let feed = new Instafeed({
        accessToken: 'https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code',
        clientId: '35640047277',
        target: 'instafeed',
        limit: 3,
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
        sortBy: 'most-recent',
        resolution: 'standart-resolution'
    });
    feed.run();
}