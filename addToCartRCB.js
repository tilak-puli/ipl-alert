const cheerio = require('cheerio');

const main = async (city = "chennai") => {
  const body = {
    eventGroupId: 2,
    eventId: 3,
    standId: 46,
    qty: 4,
    seatNos: 'E-12,E-13,E-14,E-15',
    seatIds: '92017,92018,92019,92020'
  }
  
  const res = await fetch("https://shop.royalchallengers.com/api/checkout/ticketaddtocart", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0SWQiOiIxMDQwMzkiLCJ1dHlwZSI6Ik9ubGluZSIsInBvb2wiOiJQIiwibmJmIjoxNzEwMzQ0OTIzLCJleHAiOjE3MTI5MzY5MjMsImlhdCI6MTcxMDM0NDkyM30.ppi_1bnI7DER3RqZ-wBiddWve6lYLvOmZq7ikfQUpH0",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"121\", \"Not A(Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "__Host-next-auth.csrf-token=90b14ad7bf07d2950811ab557730b7353a68b9ee432d71f718c58daaccf5e96f%7C94c54bcae78082bc2956aa174e4aa9f0960117eb5e28b6065d01494d98630872; ext_name=ojplmecpdpgccookcobabopnaifgidhf; SESS1a41a2c578ea303956341aed00e8f9b8=qj-ReTcDBk2qPbKu54MHFf8eXMr0bm5f002HNY00zpQ%2C52AK; __Secure-next-auth.callback-url=https%3A%2F%2Fshop.royalchallengers.com%2Fpayzapp; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..dYDP_kiz5eTqxUte.6i3d-h9a8dY5BgCyE3olmYvQpZMReZjWqtChJ7LMAs6yZOAeOTZSaXiftN_s-2fObOA3YB6sRrHuo5LdBQx-kQFN1PGlHA_TnqMZwybH9D2OsMRoB77ZwlyOSqqMJU8lVZbcQMEXWfPTXfjeYIYKGne574RA5iRFqBLqmWc6dqFQdaxNGNJu4dhT834Z-zQDkCDm-4DJHyXbA9iUCKRTJSvFAcB9jb30Jig9JoiuwAQubW5Axznm7fOhHSOJKaI_dgE_9bcefhlL4eiP1N1qrgrFG8PVbg6QKnHgejSNtPXUD9sUC569TqUw_Pdt0tY1xJMIF5gGDDb3LOeUnFT2_K7opEFkN4mI0iglP-GYIBWo03MxxKv6TFd-E9ikIQMde5q2_WsGQIWYj2UohwhPgVAjQlFAN_TlUQ7Gmv2KlS10su0M-IF9vHlaafwJ_Ip6nn05FTKxgcnKtuf-_UfI_hqDjXs_8rWNbAMKlnZbsHMMfHjkvgzh7K823s9H-1zu7ZrpVm94kfp2_22XF7BowOo.9pkwdieQrnvKz2elflxYpA",
      "Referer": "https://shop.royalchallengers.com/ticket/3",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": JSON.stringify(body),
    "method": "POST"
  });

  const stand = await res.json();
  console.log(stand);
}

main()

module.exports = main;