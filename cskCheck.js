const main = async () => {
    const res = await fetch("https://www.chennaisuperkings.com/module/tickets/js/tickets.js", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"121\", \"Not A(Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "CSK=Chennaisuperkings; ext_name=ojplmecpdpgccookcobabopnaifgidhf; AWSALB=B8hrIIGWsgTwIMk3x8cAJJ7cZp/DU9+qHojSgmiPLzrd/H0MLqRQ9pUohW8PStXwwXNsgj31Odxa+lg1NKMonMTsU7PTSpj2o0IYqoLha4hr/MhLmEUL8Qmy7sK2"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"
    });

    const body = await res.text();
    if(!body.match(/"TEAMBSHORTNAME": "RCB"/)) {
        console.log("csk didn't start winning");
        return 0;
    } else {
        console.log("CSK is ready to win");
        return 1;
    }
}

module.exports = main;