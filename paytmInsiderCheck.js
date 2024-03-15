const cheerio = require('cheerio');

const main = async (city =  "chennai") => {
    let value = 0;
    const res = await fetch("https://insider.in/all-events-in-"+city, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Chromium\";v=\"121\", \"Not A(Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "WZRK_G=0c99a80341534830bb10f84715e84807; g_state={\"i_p\":1703953803416,\"i_l\":1}; _ga=GA1.2.51991552.1703943704; _ga_FLJX1888KB=GS1.1.1703994445.3.0.1703994445.60.0.0; insider-test-cookie; session_id=s%3AB--_11LElRqR0y1Ab3fuSZP8_jpwWOTi.v9y%2F90Q5so8njakza82AiDhi5u8D7e6FH1CVkLMRckk; _ALGOLIA=10aaf234-e027-4320-8f94-9e23cd8270cc; ext_name=ojplmecpdpgccookcobabopnaifgidhf; cityChanged=chennai; showFirstTimeBanner=true; cachedCity=chennai",
            "Referer": "https://www.google.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    const body = await res.text();

    const $ = cheerio.load(body);

    let count = 0;
    $('[data-ref=event_card]').each((i, eventCard) => {
        const eventDescription = eventCard.attribs['aria-label'];
        count++;

        if (eventDescription?.match(/csk|rcb/i) &&  !eventDescription?.match(/live screening/i)) {
            console.log("Event tickets released in Paytm Insider");
            console.log(eventDescription);
            value  = 1;
        }
    });
    
    if(value) {return 1}

    if (count === 0) {
        console.log("\x1b[31m", "Script  might need update for  Paytm Insider")
        return 0;
    } else {
        console.log("Event tickets not released in Paytm Insider");
        return 0;
    }
}

module.exports = main;



