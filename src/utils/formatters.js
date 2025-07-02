// Text formatting utilities
export const formatters = {
  // Apply bold formatting
  bold: (text) => `**${text}**`,
  
  // Apply italic formatting
  italic: (text) => `*${text}*`,
  
  // Apply underline formatting
  underline: (text) => `__${text}__`,
  
  // Apply strikethrough formatting
  strikethrough: (text) => `~~${text}~~`,
  
  // Create bullet list
  bulletList: (text) => {
    return text.split('\n').map(line => 
      line.trim() ? `• ${line.trim()}` : line
    ).join('\n')
  },
  
  // Create numbered list
  numberedList: (text) => {
    return text.split('\n').map((line, index) => 
      line.trim() ? `${index + 1}. ${line.trim()}` : line
    ).join('\n')
  },
  
  // Format hashtag
  hashtag: (text) => {
    if (!text) return '#'
    return `#${text.replace(/\s+/g, '').replace(/^#+/, '')}`
  },
  
  // Clean text for LinkedIn (remove markdown)
  cleanForLinkedIn: (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1')  // Remove bold
      .replace(/\*(.*?)\*/g, '$1')      // Remove italic
      .replace(/__(.*?)__/g, '$1')      // Remove underline
      .replace(/~~(.*?)~~/g, '$1')      // Remove strikethrough
      .trim()
  },
  
  // Convert to HTML for preview
  toHTML: (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>')
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      .replace(/\n/g, '<br>')
      .replace(/#(\w+)/g, '<span class="text-primary font-medium">#$1</span>')
      .replace(/@(\w+)/g, '<span class="text-secondary font-medium">@$1</span>')
  }
}

// Character and word counting utilities
export const counters = {
  // Count characters
  characters: (text) => text ? text.length : 0,
  
  // Count words
  words: (text) => {
    if (!text) return 0
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  },
  
  // Count lines
  lines: (text) => text ? text.split('\n').length : 0,
  
  // Count hashtags
  hashtags: (text) => {
    if (!text) return 0
    return (text.match(/#\w+/g) || []).length
  },
  
  // Count mentions
  mentions: (text) => {
    if (!text) return 0
    return (text.match(/@\w+/g) || []).length
  },
  
  // Count emojis
  emojis: (text) => {
    if (!text) return 0
    return (text.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu) || []).length
  }
}

// Text validation utilities
export const validators = {
  // Check if text exceeds LinkedIn character limit
  isWithinLimit: (text, limit = 3000) => {
    return counters.characters(text) <= limit
  },
  
  // Check if text is not empty
  hasContent: (text) => {
    return text && text.trim().length > 0
  },
  
  // Get validation status
  validate: (text, limit = 3000) => {
    const errors = []
    const warnings = []
    
    if (!validators.hasContent(text)) {
      errors.push('Post content cannot be empty')
    }
    
    if (!validators.isWithinLimit(text, limit)) {
      errors.push(`Post exceeds ${limit} character limit`)
    }
    
    const hashtagCount = counters.hashtags(text)
    if (hashtagCount === 0) {
      warnings.push('Consider adding hashtags to increase visibility')
    } else if (hashtagCount > 5) {
      warnings.push('Consider using fewer hashtags (1-3 is optimal)')
    }
    
    const wordCount = counters.words(text)
    if (wordCount > 0 && wordCount < 10) {
      warnings.push('Very short posts may get less engagement')
    } else if (wordCount > 300) {
      warnings.push('Long posts may be truncated in the feed')
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  }
}

// Text manipulation utilities
export const textUtils = {
  // Insert text at cursor position
  insertAt: (originalText, insertText, position) => {
    return originalText.slice(0, position) + insertText + originalText.slice(position)
  },
  
  // Replace text selection
  replaceSelection: (originalText, newText, start, end) => {
    return originalText.slice(0, start) + newText + originalText.slice(end)
  },
  
  // Get word boundaries for selection
  getWordBoundaries: (text, position) => {
    const before = text.slice(0, position).match(/\w*$/)
    const after = text.slice(position).match(/^\w*/)
    
    return {
      start: position - (before ? before[0].length : 0),
      end: position + (after ? after[0].length : 0)
    }
  },
  
  // Wrap selection with formatting
  wrapSelection: (text, start, end, wrapper) => {
    const selectedText = text.slice(start, end)
    const wrappedText = typeof wrapper === 'function' ? wrapper(selectedText) : `${wrapper}${selectedText}${wrapper}`
    return textUtils.replaceSelection(text, wrappedText, start, end)
  },
  
  // Clean extra whitespace
  cleanWhitespace: (text) => {
    return text
      .replace(/[ \t]+/g, ' ')        // Multiple spaces/tabs to single space
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Multiple line breaks to double
      .trim()
  },
  
  // Truncate text with ellipsis
  truncate: (text, maxLength, suffix = '...') => {
    if (!text || text.length <= maxLength) return text
    return text.slice(0, maxLength - suffix.length) + suffix
  }
}

// Export all utilities
export default {
  formatters,
  counters,
  validators,
  textUtils
}