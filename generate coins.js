var username = prompt("Username")
var password = prompt("Password")

async function getpasswordhash() {
    var response = await fetch("https://www.poptropica.com/validate-player.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryvpap5L9oQOdhvIMo",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.poptropica.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundaryvpap5L9oQOdhvIMo\r\nContent-Disposition: form-data; name=\"login\"\r\n\r\n" + username + "\r\n------WebKitFormBoundaryvpap5L9oQOdhvIMo\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n" + password + "\r\n------WebKitFormBoundaryvpap5L9oQOdhvIMo--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
    var json = await response.json()
    return json.pass_hash
}

var login = "login=" + username + "&pass_hash=" + await getpasswordhash()

setInterval(function () {fetch("https://www.poptropica.com/games/interface/submit_game.php", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://www.poptropica.com/haxe/play/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": login + "&dbid=1&gamename=poptastic&score=620&win=1&loss=0&game_time=0&personal_high_score=100&category=all_time_highscore",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });}, 10);