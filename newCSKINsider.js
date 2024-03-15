const cheerio = require('cheerio');

const main = async (city =  "chennai") => {
    let value = 0;
    const res = await fetch("https://insider.in/tata-ipl-2024-match1-chennai-super-kings-vs-royal-challengers-bangalore-march22/event?utm_medium=landing_page&utm_campaign=ipl_2024", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "insider-test-cookie; _gid=GA1.2.1620197773.1710475110; _gat=1; session_id=s%3AN-w6_XD0e4jETFSfgdFm6mJbjZfItCgF.QzNxAiXyJJPTgprWkUHcIuGTYJZVNc%2Bj7rWiiVx%2FK9w; _ALGOLIA=d8cc526b-9ffc-4f4d-ba44-de5fef0f774c; WZRK_G=a324520a59eb4008b09a24aa5ab14333; _fbp=fb.1.1710475110288.808160138; showFirstTimeBanner=true; cachedCity=chennai; newCity=chennai; skip_online_overlay=true; _gali=test; _ga_FLJX1888KB=GS1.1.1710475110.1.1.1710475112.58.0.0; _ga=GA1.2.627044733.1710475110; g_state={\"i_l\":0}; WZRK_S_487-8K8-864Z=%7B%22p%22%3A2%2C%22s%22%3A1710475110%2C%22t%22%3A1710475117%7D",
          "Referer": "https://insider.in/ipl-indian-premier-league/schedule",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });

      const res1 = await fetch("https://insider.in/tata-ipl-2024-match1-chennai-super-kings-vs-royal-challengers-bengaluru-march22/event?utm_medium=landing_page&utm_campaign=ipl_2024", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "insider-test-cookie; _gid=GA1.2.1620197773.1710475110; _gat=1; session_id=s%3AN-w6_XD0e4jETFSfgdFm6mJbjZfItCgF.QzNxAiXyJJPTgprWkUHcIuGTYJZVNc%2Bj7rWiiVx%2FK9w; _ALGOLIA=d8cc526b-9ffc-4f4d-ba44-de5fef0f774c; WZRK_G=a324520a59eb4008b09a24aa5ab14333; _fbp=fb.1.1710475110288.808160138; showFirstTimeBanner=true; cachedCity=chennai; newCity=chennai; skip_online_overlay=true; _gali=test; _ga_FLJX1888KB=GS1.1.1710475110.1.1.1710475112.58.0.0; _ga=GA1.2.627044733.1710475110; g_state={\"i_l\":0}; WZRK_S_487-8K8-864Z=%7B%22p%22%3A2%2C%22s%22%3A1710475110%2C%22t%22%3A1710475117%7D",
          "Referer": "https://insider.in/ipl-indian-premier-league/schedule",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });


      const res2 = await fetch("https://insider.in/tata-ipl-2024-match1-chennai-super-kings-vs-royal-challengers-bangalore-march-22/event?utm_medium=landing_page&utm_campaign=ipl_2024", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "insider-test-cookie; _gid=GA1.2.1620197773.1710475110; _gat=1; session_id=s%3AN-w6_XD0e4jETFSfgdFm6mJbjZfItCgF.QzNxAiXyJJPTgprWkUHcIuGTYJZVNc%2Bj7rWiiVx%2FK9w; _ALGOLIA=d8cc526b-9ffc-4f4d-ba44-de5fef0f774c; WZRK_G=a324520a59eb4008b09a24aa5ab14333; _fbp=fb.1.1710475110288.808160138; showFirstTimeBanner=true; cachedCity=chennai; newCity=chennai; skip_online_overlay=true; _gali=test; _ga_FLJX1888KB=GS1.1.1710475110.1.1.1710475112.58.0.0; _ga=GA1.2.627044733.1710475110; g_state={\"i_l\":0}; WZRK_S_487-8K8-864Z=%7B%22p%22%3A2%2C%22s%22%3A1710475110%2C%22t%22%3A1710475117%7D",
          "Referer": "https://insider.in/ipl-indian-premier-league/schedule",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });



      const res3 = await fetch("https://insider.in/tata-ipl-2024-chennnai-super-kings-vs-royal-challengers-bangalore-march-22-match-0/event?utm_medium=landing_page&utm_campaign=ipl_2024&qfqid=BXDdb1MaEdZ6oxHjneFIejOMa&qfts=1710483391&qfa=paytminsider&qfq=ipl2024cskvsrcb01&qfpt=SafeGuard&qfh=d94c76833b0e542a8ca65cd0a5bcfb130d4016b134afeda2148f8e8680801e6e", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "insider-test-cookie; _gid=GA1.2.1620197773.1710475110; _gat=1; session_id=s%3AN-w6_XD0e4jETFSfgdFm6mJbjZfItCgF.QzNxAiXyJJPTgprWkUHcIuGTYJZVNc%2Bj7rWiiVx%2FK9w; _ALGOLIA=d8cc526b-9ffc-4f4d-ba44-de5fef0f774c; WZRK_G=a324520a59eb4008b09a24aa5ab14333; _fbp=fb.1.1710475110288.808160138; showFirstTimeBanner=true; cachedCity=chennai; newCity=chennai; skip_online_overlay=true; _gali=test; _ga_FLJX1888KB=GS1.1.1710475110.1.1.1710475112.58.0.0; _ga=GA1.2.627044733.1710475110; g_state={\"i_l\":0}; WZRK_S_487-8K8-864Z=%7B%22p%22%3A2%2C%22s%22%3A1710475110%2C%22t%22%3A1710475117%7D",
          "Referer": "https://insider.in/ipl-indian-premier-league/schedule",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });


    const statuses = new Set();
    statuses.add(res.status)
    statuses.add(res1.status)
    statuses.add(res2.status)
    statuses.add(res3.status)

    const ret = [...statuses].some(s  => s !== 404 && s !==  500);

      if(ret) {
        console.log(res.status)
        console.log(res1.status)
        console.log(res2.status)
        console.log(res3.status)
        console.log("Check paytm insider, tickets released for csk vs rcb using direct link new csk insider");
      }

    return ret
 }


module.exports = main;