const cheerio = require('cheerio');

const main = async (city =  "chennai") => {
    let value = 0;
    const res = await fetch("https://shop.royalchallengers.com/ticket/2", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "sec-ch-ua": "\"Chromium\";v=\"121\", \"Not A(Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "__Host-next-auth.csrf-token=90b14ad7bf07d2950811ab557730b7353a68b9ee432d71f718c58daaccf5e96f%7C94c54bcae78082bc2956aa174e4aa9f0960117eb5e28b6065d01494d98630872; ext_name=ojplmecpdpgccookcobabopnaifgidhf; __Secure-next-auth.callback-url=https%3A%2F%2Fshop.royalchallengers.com%2Fauth%3FcallbackUrl%3D%2Fticket%2F1; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..PowQxCD0jp5L6gR1.G1C4AyXy9m4WAenaR2zgL477EtNY3D3qVA0fbseGcTJ2z6c35wA_5qOTWzj1noA8Xxf4db6kwP6Wbp6W_FrG3CJoGJ3VJQCC_cTqJf1bto-FR5EoRF7sw2bXyQmu4UOeRm3wUjdjwbWNhxaHxE-CpUNYu8jgGM9LlUE5SGYkuoAT_EE1NZmnyAw059ZoN6vT1yAwyNdf2OJHZliVDizq-Jz-lpdoCB-jZ2-oNXTTHHS-3lidw3EpGHdGtBe-pcGESKFhqCkLxNT6K0o6geCtX0TG52TNSfcw0mjVyxyS29CCB0QdmCYPxiPmVQWILk4zbW7iz9ba0Hl5IYtBw9KJT_isru3NTmVHhbdYqvmZny6UmL6W5KV7IR632wRY139x6LWDgEJBsTmeGt5fwkjLhLgbbHFcOdC076bEpQhZrPjZtXdGtALyCBskGujD5StmH4Rvtr7fCiBbTSjjTJiaOIGfsvmThJNQT8TAVaWRGmb_6lnGFkq4NTpwMpLCc64SflCbOMYE_g.HVkdVZil8L5LfcOIZ9_ZQw",
          "Referer": "https://shop.royalchallengers.com/auth?callbackUrl=/ticket/1",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });
      
    const body = await res.text();
    console.log(body);

    if(body.match(/NEXT_REDIRECT/)) {
        console.log("RCB didn't start losing");
        return 0;
    } else {
        console.log("RCB is ready to lose");
        return 1;
    }

    // const $ = cheerio.load(body);

    // let count = 0;
    // $('[data-ref=event_card]').each((i, eventCard) => {
    //     const eventDescription = eventCard.attribs['aria-label'];
    //     count++;

    //     if (eventDescription?.match(/csk|rcb/i) &&  !eventDescription?.match(/live screening/i)) {
    //         console.log("Event tickets released in  Paytm Insider");
    //         console.log(eventDescription);
    //         value  = 1;
    //     }
    // });
    
    // if(value) {return 1}

    // if (count === 0) {
    //     console.log("\x1b[31m", "Script  might need update for  Paytm Insider")
    //     return 0;
    // } else {
    //     console.log("Event tickdts not released in  Paytm Insider");
    //     return 0;
    // }
}

module.exports = main;