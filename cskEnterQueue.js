const pt = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {

    pt.launch({ headless: false}).then(async browser => {
        const p = await browser.newPage();
        await p.setViewport({ width: 1000, height: 500 })
        await p.goto('https://queue.insider.in/ipl2024cskvsrcb01')
        console.log(p.url())
        await delay(2 * 1000);
        console.log(p.url())
    });

    await delay(30 * 1000)

}


main()