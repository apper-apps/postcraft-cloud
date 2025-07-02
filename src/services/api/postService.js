class PostService {
  constructor() {
    this.storageKey = 'postcraft_content'
    this.historyKey = 'postcraft_history'
    this.maxHistoryItems = 10
  }

  // Save content to local storage
  saveToStorage(content) {
    try {
      const postData = {
        content,
        lastSaved: new Date().toISOString(),
        id: Date.now().toString()
      }
      
      localStorage.setItem(this.storageKey, JSON.stringify(postData))
      this.addToHistory(postData)
      
      return postData
    } catch (error) {
      console.error('Failed to save to storage:', error)
      return null
    }
  }

  // Load content from local storage
  loadFromStorage() {
    try {
      const saved = localStorage.getItem(this.storageKey)
      if (saved) {
        const postData = JSON.parse(saved)
        return postData.content
      }
      return null
    } catch (error) {
      console.error('Failed to load from storage:', error)
      return null
    }
  }

  // Clear storage
  clearStorage() {
    try {
      localStorage.removeItem(this.storageKey)
      return true
    } catch (error) {
      console.error('Failed to clear storage:', error)
      return false
    }
  }

  // Add to history
  addToHistory(postData) {
    try {
      const history = this.getHistory()
      const newHistory = [postData, ...history.filter(item => item.id !== postData.id)]
        .slice(0, this.maxHistoryItems)
      
      localStorage.setItem(this.historyKey, JSON.stringify(newHistory))
    } catch (error) {
      console.error('Failed to add to history:', error)
    }
  }

  // Get history
  getHistory() {
    try {
      const history = localStorage.getItem(this.historyKey)
      return history ? JSON.parse(history) : []
    } catch (error) {
      console.error('Failed to get history:', error)
      return []
    }
  }

  // Clear history
  clearHistory() {
    try {
      localStorage.removeItem(this.historyKey)
      return true
    } catch (error) {
      console.error('Failed to clear history:', error)
      return false
    }
  }

  // Export content as file
  exportAsFile(content, filename = null) {
    try {
      const defaultFilename = `linkedin-post-${new Date().toISOString().split('T')[0]}.txt`
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      
      const a = document.createElement('a')
      a.href = url
      a.download = filename || defaultFilename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      return true
    } catch (error) {
      console.error('Failed to export file:', error)
      return false
    }
  }

  // Get content statistics
  getStats(content) {
    if (!content) {
      return {
        characters: 0,
        words: 0,
        lines: 0,
        hashtags: 0,
        mentions: 0,
        emojis: 0
      }
    }

    const words = content.trim().split(/\s+/).filter(word => word.length > 0).length
    const lines = content.split('\n').length
    const hashtags = (content.match(/#\w+/g) || []).length
    const mentions = (content.match(/@\w+/g) || []).length
    const emojis = (content.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu) || []).length

    return {
      characters: content.length,
      words,
      lines,
      hashtags,
      mentions,
      emojis
    }
  }

  // Format content for LinkedIn
  formatForLinkedIn(content) {
    if (!content) return ''

    return content
      // Remove markdown-style formatting for plain text
      .replace(/\*\*(.*?)\*\*/g, '$1')  // Bold
      .replace(/\*(.*?)\*/g, '$1')      // Italic
      .replace(/__(.*?)__/g, '$1')      // Underline
      .replace(/~~(.*?)~~/g, '$1')      // Strikethrough
      .trim()
  }

  // Validate post content
  validatePost(content) {
    const errors = []
    const warnings = []

    // Character limit check
    if (content.length > 3000) {
      errors.push('Post exceeds LinkedIn\'s 3000 character limit')
    }

    // Empty content check
    if (!content.trim()) {
      errors.push('Post content cannot be empty')
    }

    // Hashtag recommendations
    const hashtags = (content.match(/#\w+/g) || []).length
    if (hashtags === 0) {
      warnings.push('Consider adding hashtags to increase visibility')
    } else if (hashtags > 5) {
      warnings.push('Consider using fewer hashtags (1-3 is optimal)')
    }

    // Word count recommendations
    const words = content.trim().split(/\s+/).filter(word => word.length > 0).length
    if (words < 10) {
      warnings.push('Very short posts may get less engagement')
    } else if (words > 300) {
      warnings.push('Long posts may be truncated in the feed')
    }

    return { errors, warnings, isValid: errors.length === 0 }
  }
}

const postService = new PostService()
export default postService