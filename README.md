# Tweet Reader Client
A browser script for rendering a predownloaded array of tweets.

    npm install tweet-reader-client

## Usage
Simply add the tweet reader script to your webpage

    <script src="/tweet-reader-client.js"></script>

And add an empty `<div>` where you want your tweets to be displayed

    <div id="twitter-timeline"></div>

Then ensure a JSON file is available at `/tweets.json`. See [tweet-reader-php](https://github.com/eberkund/tweet-reader-php) or [tweet-reader-lambda](https://github.com/eberkund/tweet-reader-lambda) for more information.
