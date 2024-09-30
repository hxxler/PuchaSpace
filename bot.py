import telebot

TOKEN = '7879104456:AAHIzi9XN5Pfd1Wef_GG9Pk32ZKcZ3vbN3U'
bot = telebot.TeleBot(TOKEN)

# Обработчик команды /start
@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Привет! Добро пожаловать в кликер-игру! Жми на кнопку ниже, чтобы играть.")
    
    # Ссылка на веб-страницу с кликером
    bot.send_message(message.chat.id, "Играй тут: [Clicker Game](https://elegant-syrniki-0fb98a.netlify.app/)", parse_mode="Markdown")

# Запуск бота
bot.polling()