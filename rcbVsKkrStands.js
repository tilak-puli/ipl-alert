const cheerio = require('cheerio');

const main = async (city = "chennai") => {
  let value = 0;
  const res = await fetch("https://shop.royalchallengers.com/ticket/3?_rsc=51b0v", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22ticket%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
      "next-url": "/ticket",
      "rsc": "1",
      "sec-ch-ua": "\"Chromium\";v=\"121\", \"Not A(Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "__Host-next-auth.csrf-token=90b14ad7bf07d2950811ab557730b7353a68b9ee432d71f718c58daaccf5e96f%7C94c54bcae78082bc2956aa174e4aa9f0960117eb5e28b6065d01494d98630872; ext_name=ojplmecpdpgccookcobabopnaifgidhf; SESS1a41a2c578ea303956341aed00e8f9b8=qj-ReTcDBk2qPbKu54MHFf8eXMr0bm5f002HNY00zpQ%2C52AK; __Secure-next-auth.callback-url=https%3A%2F%2Fshop.royalchallengers.com%2Fpayzapp; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..PFKFmEnDt1uV-oNs.kmG4p0v-jTAKqjDxMVflM_GI9LnrSAO-6Ad7UyL2ygOi_C5l1ffa7j1Ux-yXBJhhfC_YKanJ01jrbqfsIkbWZPe5rBa7wSUw6IEol-3KYWxzhGVK8BFwjjRI0Pz9Kg8UEi7oRJQa_LskNEEGAWHAA481PVx8Wi8fiBXEBGxTdXFLO0uPHI0OyI4Tv96TrxN_qNtpT_cM9s_s86p404Tjt7MryE2gcDjcmD7moBhfmvonoA9Hud9KJxfulJAA2O4FM-o-eIjIxSt50gVqBNqNWI1FW6m-4szhQeU2xpA1-WEfiOnJjfzzhPsrd6D0NFkQGiaKTnq5vPAXqFzGMEKJjsJJ_-pJpQtCem9RpihzdfWWl4MQL5np7Guio-BfJyOJ6zGhM1qeOjEYDgvwiYNkC09S5kYQqoiHtdvJI0e-HZmJ9eF8vdVoSNLfYrB3nHuJqhuR-IsOMT6BQp3TpfBupD_uuR4EXx7vSRUmnSpqAf_mslP48Btl4hHdqSWu4tBQfaIUxdgUwZcRxs56YuU5CbE.mI0rY9n3ohvdnt4hRgjwDQ",
      "Referer": "https://shop.royalchallengers.com/ticket",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });

  const body = await res.text();

  try {
    const event = JSON.parse(`{"res":[${body.split("7:[")[1]}}`).res[3].evt

    if(event.stands.length>1) {
      console.log("no   ")
      return 1
    } else {
      console.log("stands are not updated")
      return 0
    }
  } catch {
    console.log("update script");
  }
}


module.exports = main;