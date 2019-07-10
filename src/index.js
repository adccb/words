const { prompt } = require('inquirer')
const { red, cyan, green } = require('chalk')

const { words, c_pos, c_neu, c_neg } = require('./words.js')

Array.prototype.random = function() { return this[Math.floor(Math.random() * this.length)] }

const positivity = {
  [c_pos]: {
    color: green,
    emoji: ['☺️', '👏', '✨', '🌺', '🎉']
  },
  [c_neu]: {
    color: cyan,
    emoji: ['🙂', '👋', '🐙', '🌿', '🌚']
  },
  [c_neg]: {
    color: red,
    emoji: ['😱', '🤟', '❤️', '☀️', '🌹']
  }
}

;(async function () {
  const { t1 } = await prompt([
    {
      type: 'list',
      name: 't1',
      message: 'what word best describes your mood?',
      choices: Object.keys(words),
    }
  ])
    
  const { color, emoji } = positivity[words[t1].positivity]

  const { t2 } = await prompt([
    {
      type: 'list',
      name: 't2',
      message: 'is one of these a better fit?',
      choices: Object.keys(words[t1].adjectives),
    } 
  ])

  const { t3 } = await prompt([
    {
      type: 'list',
      name: 't3',
      message: 'how about one of these?',
      choices: words[t1].adjectives[t2]
    }  
  ])

  console.log(`\nyou chose ${color(t3)}. glad we could help. ${emoji.random()}`)
})()
