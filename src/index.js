const inquirer = require('inquirer')
const chalk = require('chalk')

const levels = {
  fearful: {
    positivity: 'negative',
    adjectives: ['scared', 'anxious', 'insecure', 'weak', 'rejected', 'threatened']
  },
  angry: {
    positivity: 'negative', 
    adjectives: ['let down', 'humiliated', 'bitter', 'mad', 'aggressive', 'frustrated', 'distant', 'critical']
  },
  disgusted: {
    positivity: 'negative', 
    adjectives: ['disapproving', 'disappointed', 'awful', 'repelled']
  },
  sad: {
    positivity: 'negative',
    adjectives: ['hurt', 'depressed', 'guilty', 'despairing', 'vulnerable', 'lonely']
  },
  happy: {
    positivity: 'positive',
    adjectives: ['optimistic', 'trusting', 'peaceful', 'powerful', 'accepted', 'proud', 'interested', 'content', 'playful']
  },
  surprised: {
    positivity: 'neutral',
    adjectives: ['startled', 'confused', 'amazed', 'excited']
  }
}

const positivity = {
  positive: {
    color: chalk.green,
    emoji: ['☺️', '👏', '✨', '🌺', '🎉']
  },
  neutral: {
    color: chalk.cyan,
    emoji: ['🙂', '👋', '🐙', '🌿', '🌚']
  },
  negative: {
    color: chalk.red,
    emoji: ['😱', '🤟', '❤️', '☀️', '🌹']
  }
}

inquirer.prompt([
  {
    type: 'list',
    name: 'mood',
    message: 'what word best describes your mood?',
    choices: Object.keys(levels),
    filter: mood => mood.toLowerCase()
  }
]).then(({ mood }) => {
  const { color, emoji } = positivity[levels[mood].positivity]
  const random = arr => arr[Math.floor(Math.random() * arr.length)]

  inquirer.prompt([
    {
      type: 'list',
      name: 'word',
      message: 'is one of these a better fit?',
      choices: levels[mood].adjectives,
    } 
  ]).then(({ word }) => {
    console.log()
    console.log(`you chose ${color(word)}. glad we could help. ${random(emoji)}`)
  })
})

