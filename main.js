const paytmInsiderChecker = require("./paytmInsiderCheck");
const rcbCheck = require("./rcbVsKkrStands");
const cskCheck = require("./cskCheck");
const cskCheck1 = require("./newCSKINsider");
const notifier = require('node-notifier');
var player = require('play-sound')(opts = {})
const token = "7106716544:AAFwcwxZAYTO2iN8ldzn6AeVF5689cdrqK4";
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: false, });

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const main = async () => {
    while (true) {
        try {
            console.log(new Date().toLocaleString());
            console.log("Checking  for rcb tickets")
            // const rcb = await rcbCheck();
            // console.log("Checking  for chennai in paytm insider")
            let chennaiTickets = await paytmInsiderChecker("chennai");
            chennaiTickets = chennaiTickets || (await cskCheck() === 1) || await cskCheck1();

            if (chennaiTickets) {
                console.log("\x1b[32m", "Alert Tickets are released");
                await notiify("Tickets released in paytm in " + (chennaiTickets ? "chennai" : "bengalure"));
            } else {
                console.log("\x1b[35m", "Tickets not released. sleeping");

                await delay(0.5 * 60 * 1000);
            }
        } catch (e) {
            console.log(e)
            await delay(0.5 * 60 * 1000);
        }
    }
}

const notiify = async (message) => {
    notifier.notify({
        title: message,
        message,
        sound: "./sound.mp3",
        wait: true
    });
    notifyOnTelegram(message)
    while (true) {
        player.play('sound.mp3', function (err) {
            if (err) throw err
        });
        await delay(20000);
    }

}


// replace the value below with the Telegram token you receive from @BotFather
// read the doc from https://github.com/yagop/node-telegram-bot-api to know how to catch the chatId
// const chatId = CHAT_ID;


// Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     console.log(chatId)
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });

const notifyOnTelegram = (message) => {
    try {
        bot.sendMessage("446369918", message);
    } catch (err) {
        console.log('Something went wrong when trying to send a Telegram notification', err);
    }
}


main();