const c_pos = 'positive'
const c_neu = 'neutral'
const c_neg = 'negative'

// emotion words taken from https://imgur.com/gallery/tCWChf6
const words = {
  fearful: {
    positivity: c_neg,
    adjectives: {
      scared: ['helpless', 'frightened'],
      anxious: ['overwhelmed', 'worried'],
      insecure: ['inadequate', 'inferior'],
      weak: ['worthless', 'insignificant'],
      rejected: ['excluded', 'persecuted'],
      threatened: ['nervous', 'exposed'],
    }
  },
  angry: {
    positivity: c_neg, 
    adjectives: {
      'let down': ['betrayed', 'resentful'],
      humiliated: ['disrespected', 'ridiculed'],
      bitter: ['indignant', 'violated'],
      mad: ['furious', 'jealous'],
      aggressive: ['provoked', 'hostile'],
      frustrated: ['infuriated', 'annoyed'],
      distant: ['withdrawn', 'numb'],
      critical: ['sceptical', 'dismissive'],
    }
  },
  disgusted: {
    positivity: c_neg, 
    adjectives: {
      disapproving: ['judgemental', 'embarrassed'],
      disappointed: ['appalled', 'revolted'],
      awful: ['nauseated', 'detestable'],
      repelled: ['horrified', 'hesitant']
    }
  },
  sad: {
    positivity: c_neg,
    adjectives: {
      hurt: ['embarrassed', 'disappointed'],
      depressed: ['inferior', 'empty'],
      guilty: ['remorseful', 'ashamed'],
      despairing: ['grieving', 'powerless'],
      vulnerable: ['victimized', 'fragile'],
      lonely: ['isolated', 'abandoned']
    }
  },
  happy: {
    positivity: c_pos,
    adjectives: {
      optimistic: ['hopeful', 'inspired'],
      trusting: ['sensitive', 'intimate'],
      peaceful: ['loving', 'thankful'],
      powerful: ['courageous', 'creative'],
      accepted: ['respected', 'valued'],
      proud: ['successful', 'confident'],
      interested: ['curious', 'inquisitive'],
      content: ['free', 'joyful'],
      playful: ['aroused', 'cheeky'],
    }
  },
  surprised: {
    positivity: c_neu,
    adjectives: {
      startled: ['shocked', 'dismayed'],
      confused: ['disillusioned', 'perplexed'],
      amazed: ['astonished', 'awed'],
      excited: ['eager', 'enetgetic'],
    }
  },
  bad: {
    positivity: c_neu,
    adjectives: {
      tired: ['sleepy', 'unfocussed'],
      stressed: ['overwhelmed', 'out of control'],
      busy: ['pressured', 'rushed'],
      bored: ['indifferent', 'apathetic'],
    }
  }
}

module.exports = { words, c_pos, c_neu, c_neg }

