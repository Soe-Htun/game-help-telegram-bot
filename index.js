const Telegraf = require('telegraf');

const BOT_TOKEN = '5025519237:AAHENcBoakSXPBk5pDToG7r5WWE4wIu7Knk';

const bot = new Telegraf(BOT_TOKEN);
const helpMessage = `
Say something to me
/baccarat - Baccarat
/agreement - Agreement
/bankerPlayerBull - Banker Player Bull
/bullbull - Bull Bull
/dragonTiger - Dragon Tiger
/roulette - Roulette
/sicBo - Sic Bo
`;

// bot.command('gamehelp', ctx => {
//   let gameList = ['res/Agreement.docx.docx', 'res/Baccarat.docx', 'res/Banker Player Bull.doc', 'res/Bull Bull.docx', 'res/Dragon Tiger.docx', 'res/Roulette.docx', 'res/Sic Bo.docx']

//   let result = gameList.map(games => {
//     return {
//       source: games
//     }
//   })

//   bot.telegram.sendDocument(ctx.chat.id, result)

// })

bot.start((ctx) => {
  ctx.reply("Hi, I am game help Bot");
  ctx.reply(helpMessage);
 })

bot.command('baccarat', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Baccarat.docx'
    }, 
  )
})

bot.command('agreement', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Agreement.docx'
    }, 
  )
})

bot.command('bankerPlayerBull', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Banker Player Bull.doc'
    }, 
  )
})

bot.command('bullbull', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Bull Bull.docx'
    }, 
  )
})

bot.command('dragonTiger', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Dragon Tiger.docx'
    }, 
  )
})

bot.command('roulette', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Roulette.docx'
    }, 
  )
})

bot.command('sicBo', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
  bot.telegram.sendDocument(ctx.chat.id, 
    {
      source: 'res/Sic Bo.docx'
    }, 
  )
})

bot.launch();