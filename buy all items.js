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

async function getitems(){
    var response = await fetch("https://www.poptropica.com/list_redeemable_items.php", {
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
      "body": "all_active=Y&cats=2001%7C2003%7C2004%7C2011%7C2012%7C2013%7C2014%7C2015%7C2016%7C2017%7C2018%7C2019%7C2046",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    })
    var text = await response.text()
    eval(text)
    return items_info
}

function buyitems(t) {
    t.forEach(function (item, index) {
        fetch("https://www.poptropica.com/redeem_credits.php", {
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
              "body": login + "&dbid=1&item_id=" + item.id,
              "method": "POST",
              "mode": "cors",
              "credentials": "include"
        })
        console.log(item.id)
    })
}
    
var items = await getitems()
buyitems(items[2001])
buyitems(items[2003])
buyitems(items[2004])
buyitems(items[2011])
buyitems(items[2012])
buyitems(items[2013])
buyitems(items[2014])
buyitems(items[2015])
buyitems(items[2016])
buyitems(items[2017])
buyitems(items[2018])
buyitems(items[2019])