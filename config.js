require('dotenv').config()

let config = {};

config.urls = [
	'https://pr.olx.com.br/regiao-de-curitiba-e-paranagua/computadores-e-acessorios?pe=500&ps=100&q=unifi',
    'https://sp.olx.com.br/sao-paulo-e-regiao/computadores-e-acessorios?pe=500&ps=100&q=unifi',
    'https://sp.olx.com.br/sao-paulo-e-regiao?q=chromecast'
]

config.telegramChatID = process.env.TELEGRAM_CHAT_ID
config.telegramToken = process.env.TELEGRAM_TOKEN
config.logPath = 'scrapper.log'
config.dbPath = 'ads.db'


module.exports = config;