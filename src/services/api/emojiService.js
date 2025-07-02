class EmojiService {
  constructor() {
    this.categories = [
      { id: 'smileys', name: 'Smileys & People', icon: '😀' },
      { id: 'animals', name: 'Animals & Nature', icon: '🐶' },
      { id: 'food', name: 'Food & Drink', icon: '🍎' },
      { id: 'activities', name: 'Activities', icon: '⚽' },
      { id: 'travel', name: 'Travel & Places', icon: '🚗' },
      { id: 'objects', name: 'Objects', icon: '💡' },
      { id: 'symbols', name: 'Symbols', icon: '❤️' },
      { id: 'flags', name: 'Flags', icon: '🏁' }
    ]

    this.emojis = [
      // Smileys & People
      { unicode: '😀', name: 'grinning face', category: 'smileys', keywords: ['happy', 'smile', 'grin'] },
      { unicode: '😃', name: 'grinning face with big eyes', category: 'smileys', keywords: ['happy', 'smile', 'joy'] },
      { unicode: '😄', name: 'grinning face with smiling eyes', category: 'smileys', keywords: ['happy', 'smile', 'laugh'] },
      { unicode: '😁', name: 'beaming face with smiling eyes', category: 'smileys', keywords: ['happy', 'smile', 'laugh'] },
      { unicode: '😆', name: 'grinning squinting face', category: 'smileys', keywords: ['happy', 'laugh', 'funny'] },
      { unicode: '😅', name: 'grinning face with sweat', category: 'smileys', keywords: ['happy', 'laugh', 'sweat'] },
      { unicode: '🤣', name: 'rolling on the floor laughing', category: 'smileys', keywords: ['laugh', 'funny', 'lol'] },
      { unicode: '😂', name: 'face with tears of joy', category: 'smileys', keywords: ['laugh', 'cry', 'funny'] },
      { unicode: '🙂', name: 'slightly smiling face', category: 'smileys', keywords: ['smile', 'happy'] },
      { unicode: '🙃', name: 'upside-down face', category: 'smileys', keywords: ['silly', 'sarcastic'] },
      { unicode: '😉', name: 'winking face', category: 'smileys', keywords: ['wink', 'flirt'] },
      { unicode: '😊', name: 'smiling face with smiling eyes', category: 'smileys', keywords: ['happy', 'smile', 'blush'] },
      { unicode: '😇', name: 'smiling face with halo', category: 'smileys', keywords: ['angel', 'innocent'] },
      { unicode: '🥰', name: 'smiling face with hearts', category: 'smileys', keywords: ['love', 'heart', 'happy'] },
      { unicode: '😍', name: 'smiling face with heart-eyes', category: 'smileys', keywords: ['love', 'heart', 'eyes'] },
      { unicode: '🤩', name: 'star-struck', category: 'smileys', keywords: ['star', 'amazing', 'wow'] },
      { unicode: '😘', name: 'face blowing a kiss', category: 'smileys', keywords: ['kiss', 'love'] },
      { unicode: '😗', name: 'kissing face', category: 'smileys', keywords: ['kiss', 'love'] },
      { unicode: '😚', name: 'kissing face with closed eyes', category: 'smileys', keywords: ['kiss', 'love'] },
      { unicode: '😙', name: 'kissing face with smiling eyes', category: 'smileys', keywords: ['kiss', 'love'] },
      { unicode: '🥲', name: 'smiling face with tear', category: 'smileys', keywords: ['happy', 'cry', 'tear'] },
      { unicode: '😋', name: 'face savoring food', category: 'smileys', keywords: ['yum', 'food', 'delicious'] },
      { unicode: '😛', name: 'face with tongue', category: 'smileys', keywords: ['tongue', 'silly'] },
      { unicode: '😜', name: 'winking face with tongue', category: 'smileys', keywords: ['wink', 'tongue', 'silly'] },
      { unicode: '🤪', name: 'zany face', category: 'smileys', keywords: ['crazy', 'silly', 'wild'] },
      { unicode: '😝', name: 'squinting face with tongue', category: 'smileys', keywords: ['tongue', 'silly'] },
      { unicode: '🤑', name: 'money-mouth face', category: 'smileys', keywords: ['money', 'rich', 'dollar'] },
      { unicode: '🤗', name: 'smiling face with open hands', category: 'smileys', keywords: ['hug', 'embrace'] },
      { unicode: '🤭', name: 'face with hand over mouth', category: 'smileys', keywords: ['oops', 'secret'] },
      { unicode: '🤫', name: 'shushing face', category: 'smileys', keywords: ['quiet', 'secret', 'shush'] },
      { unicode: '🤔', name: 'thinking face', category: 'smileys', keywords: ['think', 'hmm', 'consider'] },
      { unicode: '🤐', name: 'zipper-mouth face', category: 'smileys', keywords: ['quiet', 'secret', 'zip'] },
      { unicode: '🤨', name: 'face with raised eyebrow', category: 'smileys', keywords: ['suspicious', 'doubt'] },
      { unicode: '😐', name: 'neutral face', category: 'smileys', keywords: ['neutral', 'meh'] },
      { unicode: '😑', name: 'expressionless face', category: 'smileys', keywords: ['blank', 'meh'] },
      { unicode: '😶', name: 'face without mouth', category: 'smileys', keywords: ['quiet', 'speechless'] },
      { unicode: '😏', name: 'smirking face', category: 'smileys', keywords: ['smirk', 'sly'] },
      { unicode: '😒', name: 'unamused face', category: 'smileys', keywords: ['annoyed', 'meh'] },
      { unicode: '🙄', name: 'face with rolling eyes', category: 'smileys', keywords: ['eye roll', 'annoyed'] },
      { unicode: '😬', name: 'grimacing face', category: 'smileys', keywords: ['grimace', 'awkward'] },
      { unicode: '🤥', name: 'lying face', category: 'smileys', keywords: ['lie', 'pinocchio'] },
      { unicode: '😔', name: 'pensive face', category: 'smileys', keywords: ['sad', 'thoughtful'] },
      { unicode: '😪', name: 'sleepy face', category: 'smileys', keywords: ['tired', 'sleepy'] },
      { unicode: '🤤', name: 'drooling face', category: 'smileys', keywords: ['drool', 'hungry'] },
      { unicode: '😴', name: 'sleeping face', category: 'smileys', keywords: ['sleep', 'zzz', 'tired'] },

      // Professional/Business emojis
      { unicode: '💼', name: 'briefcase', category: 'objects', keywords: ['business', 'work', 'professional'] },
      { unicode: '📈', name: 'chart increasing', category: 'objects', keywords: ['growth', 'success', 'up'] },
      { unicode: '📊', name: 'bar chart', category: 'objects', keywords: ['data', 'analytics', 'stats'] },
      { unicode: '💡', name: 'light bulb', category: 'objects', keywords: ['idea', 'innovation', 'bright'] },
      { unicode: '🎯', name: 'bullseye', category: 'activities', keywords: ['target', 'goal', 'success'] },
      { unicode: '🚀', name: 'rocket', category: 'travel', keywords: ['launch', 'growth', 'startup'] },
      { unicode: '⭐', name: 'star', category: 'symbols', keywords: ['success', 'achievement', 'favorite'] },
      { unicode: '🏆', name: 'trophy', category: 'activities', keywords: ['win', 'success', 'achievement'] },
      { unicode: '🎉', name: 'party popper', category: 'activities', keywords: ['celebration', 'party', 'success'] },
      { unicode: '🔥', name: 'fire', category: 'symbols', keywords: ['hot', 'trending', 'amazing'] },
      { unicode: '💪', name: 'flexed biceps', category: 'smileys', keywords: ['strong', 'power', 'strength'] },
      { unicode: '👍', name: 'thumbs up', category: 'smileys', keywords: ['like', 'good', 'yes'] },
      { unicode: '👏', name: 'clapping hands', category: 'smileys', keywords: ['applause', 'clap', 'good job'] },
      { unicode: '🙌', name: 'raising hands', category: 'smileys', keywords: ['celebration', 'success', 'praise'] },
      { unicode: '✨', name: 'sparkles', category: 'symbols', keywords: ['magic', 'special', 'new'] },
      { unicode: '💯', name: 'hundred points', category: 'symbols', keywords: ['perfect', '100', 'great'] },
      { unicode: '❤️', name: 'red heart', category: 'symbols', keywords: ['love', 'heart', 'like'] },
      { unicode: '🔗', name: 'link', category: 'objects', keywords: ['chain', 'link', 'connection'] },
      { unicode: '📱', name: 'mobile phone', category: 'objects', keywords: ['phone', 'mobile', 'technology'] },
      { unicode: '💻', name: 'laptop', category: 'objects', keywords: ['computer', 'work', 'technology'] },

      // Animals & Nature
      { unicode: '🐶', name: 'dog face', category: 'animals', keywords: ['dog', 'pet', 'animal'] },
      { unicode: '🐱', name: 'cat face', category: 'animals', keywords: ['cat', 'pet', 'animal'] },
      { unicode: '🦄', name: 'unicorn', category: 'animals', keywords: ['unicorn', 'magic', 'fantasy'] },
      { unicode: '🌟', name: 'glowing star', category: 'symbols', keywords: ['star', 'shine', 'bright'] },
      { unicode: '🌈', name: 'rainbow', category: 'animals', keywords: ['rainbow', 'colorful', 'beautiful'] },
      { unicode: '🌞', name: 'sun with face', category: 'animals', keywords: ['sun', 'sunny', 'bright'] },
      { unicode: '🌙', name: 'crescent moon', category: 'animals', keywords: ['moon', 'night', 'sleep'] },

      // Food & Drink
      { unicode: '🍎', name: 'red apple', category: 'food', keywords: ['apple', 'fruit', 'healthy'] },
      { unicode: '🍕', name: 'pizza', category: 'food', keywords: ['pizza', 'food', 'italian'] },
      { unicode: '🍔', name: 'hamburger', category: 'food', keywords: ['burger', 'food', 'fast food'] },
      { unicode: '☕', name: 'hot beverage', category: 'food', keywords: ['coffee', 'tea', 'hot drink'] },
      { unicode: '🍺', name: 'beer mug', category: 'food', keywords: ['beer', 'drink', 'alcohol'] },
      { unicode: '🍰', name: 'shortcake', category: 'food', keywords: ['cake', 'dessert', 'sweet'] },

      // Activities
      { unicode: '⚽', name: 'soccer ball', category: 'activities', keywords: ['soccer', 'football', 'sport'] },
      { unicode: '🏀', name: 'basketball', category: 'activities', keywords: ['basketball', 'sport', 'ball'] },
      { unicode: '🎮', name: 'video game', category: 'activities', keywords: ['gaming', 'game', 'controller'] },
      { unicode: '🎵', name: 'musical note', category: 'activities', keywords: ['music', 'note', 'song'] },
      { unicode: '🎨', name: 'artist palette', category: 'activities', keywords: ['art', 'paint', 'creative'] },
      { unicode: '📚', name: 'books', category: 'objects', keywords: ['books', 'reading', 'education'] },

      // Travel & Places
      { unicode: '🚗', name: 'automobile', category: 'travel', keywords: ['car', 'vehicle', 'drive'] },
      { unicode: '✈️', name: 'airplane', category: 'travel', keywords: ['plane', 'travel', 'flight'] },
      { unicode: '🏠', name: 'house', category: 'travel', keywords: ['home', 'house', 'building'] },
      { unicode: '🏢', name: 'office building', category: 'travel', keywords: ['office', 'building', 'work'] },
      { unicode: '🌍', name: 'globe showing Europe-Africa', category: 'travel', keywords: ['world', 'earth', 'global'] },

      // Objects
      { unicode: '📞', name: 'telephone receiver', category: 'objects', keywords: ['phone', 'call', 'contact'] },
      { unicode: '📧', name: 'e-mail', category: 'objects', keywords: ['email', 'mail', 'message'] },
      { unicode: '📝', name: 'memo', category: 'objects', keywords: ['note', 'write', 'document'] },
      { unicode: '📊', name: 'bar chart', category: 'objects', keywords: ['chart', 'data', 'graph'] },
      { unicode: '🔍', name: 'magnifying glass tilted left', category: 'objects', keywords: ['search', 'find', 'look'] },
      { unicode: '💰', name: 'money bag', category: 'objects', keywords: ['money', 'cash', 'rich'] },

      // Symbols
      { unicode: '❗', name: 'exclamation mark', category: 'symbols', keywords: ['exclamation', 'important', 'alert'] },
      { unicode: '❓', name: 'question mark', category: 'symbols', keywords: ['question', 'help', 'ask'] },
      { unicode: '✅', name: 'check mark button', category: 'symbols', keywords: ['check', 'done', 'complete'] },
      { unicode: '❌', name: 'cross mark', category: 'symbols', keywords: ['no', 'wrong', 'error'] },
      { unicode: '⚡', name: 'high voltage', category: 'symbols', keywords: ['lightning', 'power', 'energy'] },
      { unicode: '🔔', name: 'bell', category: 'symbols', keywords: ['notification', 'alert', 'ring'] },

      // Flags
      { unicode: '🏁', name: 'chequered flag', category: 'flags', keywords: ['finish', 'race', 'goal'] },
      { unicode: '🚩', name: 'triangular flag', category: 'flags', keywords: ['flag', 'warning', 'red'] },
      { unicode: '🏳️', name: 'white flag', category: 'flags', keywords: ['surrender', 'peace', 'white'] }
    ]
  }

  getAllEmojis() {
    return {
      emojis: this.emojis,
      categories: this.categories
    }
  }

  getEmojisByCategory(categoryId) {
    return this.emojis.filter(emoji => emoji.category === categoryId)
  }

  searchEmojis(query) {
    if (!query) return []
    
    const lowercaseQuery = query.toLowerCase()
    return this.emojis.filter(emoji => 
      emoji.name.toLowerCase().includes(lowercaseQuery) ||
      emoji.keywords.some(keyword => 
        keyword.toLowerCase().includes(lowercaseQuery)
      )
    )
  }

  getRecentEmojis() {
    try {
      const recent = localStorage.getItem('recentEmojis')
      return recent ? JSON.parse(recent) : []
    } catch (error) {
      console.error('Failed to get recent emojis:', error)
      return []
    }
  }

  addToRecent(emoji) {
    try {
      const recent = this.getRecentEmojis()
      const updated = [emoji, ...recent.filter(e => e.unicode !== emoji.unicode)].slice(0, 20)
      localStorage.setItem('recentEmojis', JSON.stringify(updated))
      return updated
    } catch (error) {
      console.error('Failed to add to recent emojis:', error)
      return this.getRecentEmojis()
    }
  }

  clearRecentEmojis() {
    try {
      localStorage.removeItem('recentEmojis')
      return true
    } catch (error) {
      console.error('Failed to clear recent emojis:', error)
      return false
    }
  }

  getPopularEmojis() {
    // Return most commonly used emojis for LinkedIn
    return [
      '😊', '👍', '🔥', '💡', '🚀', '📈', '🎯', '💪', 
      '👏', '🙌', '✨', '💯', '❤️', '🌟', '🎉', '🏆'
    ].map(unicode => this.emojis.find(emoji => emoji.unicode === unicode))
     .filter(Boolean)
  }
}

const emojiService = new EmojiService()
export default emojiService