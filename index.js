require("dotenv").config();
var Twit = require("twit");

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

var stream = T.stream("statuses/filter", {
  track: ["hey invite", "hey code", "#hey", "hey.com", "hey invitation code"],
});
console.log("twitter bot started");

stream.on("tweet", function (tweet) {
  const match_res = tweet.text.match(/\b[A-z0-9]{7}\b/g);
  const tweet_user_name = tweet.user.name;
  console.log(tweet.text);
  console.log("\x1b[33m%s\x1b[0m", "Tweet user name: " + tweet_user_name);
  if (match_res != null) {
    console.log("\x1b[33m%s\x1b[0m", "IMPORTANT: " + match_res);
    console.log("");
  }
  console.log("");
});
