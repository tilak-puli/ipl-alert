const paytmInsiderChecker = require("./paytmInsiderCheck");
const notifier = require('node-notifier');
var player = require('play-sound')(opts = {})
const token = "7106716544:AAFwcwxZAYTO2iN8ldzn6AeVF5689cdrqK4";
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const main = async () => {
    while (true) {
        console.log(new Date().toLocaleString());
        console.log("Checking  for chennai in paytm insider")
        const chennaiTickets = await paytmInsiderChecker("chennai");
        console.log("Checking  for bengalure in paytm insider")
        const bangaloreTickets = await paytmInsiderChecker("bangalore");

        if (chennaiTickets || bangaloreTickets) {
            console.log("Akert Tickets are released");
            await notiify("Tickets released in paytm in " + (true ? "chennai": "bengalure"));
        } else {
            console.log("Tickets not released. sleeping");

            await delay(5 * 60 * 1000);
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

const notifyOnTelegram  = (message) => {
    try {
        bot.sendMessage("446369918", message);
    } catch (err) {
        console.log('Something went wrong when trying to send a Telegram notification', err);
    }
}


main();