const cheerio = require('cheerio');

const main = async (city = "chennai") => {
  const body = {
    eventGroupId: 2,
    eventId: 3,
    standId: 46,
    qty: 2,
    seatNos: 'F-3,F-4',
    seatIds: '92026,92027'
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
      "cookie": "__Host-next-auth.csrf-token=90b14ad7bf07d2950811ab557730b7353a68b9ee432d71f718c58daaccf5e96f%7C94c54bcae78082bc2956aa174e4aa9f0960117eb5e28b6065d01494d98630872; ext_name=ojplmecpdpgccookcobabopnaifgidhf; SESS1a41a2c578ea303956341aed00e8f9b8=qj-ReTcDBk2qPbKu54MHFf8eXMr0bm5f002HNY00zpQ%2C52AK; __Secure-next-auth.callback-url=https%3A%2F%2Fshop.royalchallengers.com%2Fpayzapp; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..D_gkx8jem957WRED._cK6_wDNbham0YZPdLk3xQcgFvI5mzgcBzF_NoWfLtuO7fnl39Au6CRGai5DbSLKdx3HDUk2rvAAai4KvwihOvmFpmgMv3ZRN0eLAHjbyJxw1C5wP4b6CMVfAFYo1R9fMv3mWNzgrgzkqb3TnlKqTgb4OYzYNuYXFtncsUtYzCcsuBFBnO5hkKkCRXZZxT_2Sh7m2omXlNd2uYbGQ0YpUrKbj74mhrUxuqCtQYYhJmTCo2YsjvK0cdl_MsgRVwVgmu3j64IDhdS_BU6dEOSUqdV46e49b9x5cdzTyr8zPCTQoleyKLLvmM3w2t4DJ22tBJ8cIbPmkQyPCqNR2j6gYGOVcXla6oRXzfJVA9Pe652az11rpJqj_azgKOFMNi8S3TfitsSXqnfm6T-k2-S2Gz4ZMSkWpDa6NerDcqjS8YsAoc7G1hKoZ_qszBwbDo9jPbu02aXvnrzcKnB2Xk65QPeaMb_h-D0OrUHM0xgy_4GanX9MuJccPL3jsJifKOXZ4oT9B7idFxZy7KPXot-kR88.AQ9fkV363B02xU0xMhJE5g",
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