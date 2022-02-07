require('dotenv').config()

let config = {};

config.urls = ['https://es.olx.com.br/norte-do-espirito-santo/eletrodomesticos/geladeiras-e-freezers?q=frigobar',
               'https://es.olx.com.br/norte-do-espirito-santo?q=elevador%20carro']

config.telegramChatID = process.env.TELEGRAM_CHAT_ID
config.telegramToken = process.env.TELEGRAM_TOKEN
config.logPath = 'scrapper.log'
config.dbPath = 'ads.db'


module.exports = config;
