import telebot

TOKEN = 'твой_токен_здесь'
bot = telebot.TeleBot(TOKEN)

# Обработчик команды /start
@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Привет! Добро пожаловать в кликер-игру! Жми на кнопку ниже, чтобы играть.")
    
    # Ссылка на веб-страницу с кликером
    bot.send_message(message.chat.id, "Играй тут: [Clicker Game](https://твой_домен)", parse_mode="Markdown")

# Запуск бота
bot.polling()