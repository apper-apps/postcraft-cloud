import React, { useState, useMemo } from 'react'
import ApperIcon from '@/components/ApperIcon'
import emojiService from '@/services/api/emojiService'

const EmojiPicker = ({ onEmojiSelect, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('smileys')
  const [searchTerm, setSearchTerm] = useState('')
  const [recentEmojis, setRecentEmojis] = useState([])

  const { emojis, categories } = emojiService.getAllEmojis()

  const filteredEmojis = useMemo(() => {
    if (searchTerm) {
      return emojis.filter(emoji => 
        emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emoji.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }
    return emojis.filter(emoji => emoji.category === activeCategory)
  }, [emojis, activeCategory, searchTerm])

  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji.unicode)
    
    // Add to recent emojis
    const updatedRecent = [emoji, ...recentEmojis.filter(e => e.unicode !== emoji.unicode)].slice(0, 20)
    setRecentEmojis(updatedRecent)
    localStorage.setItem('recentEmojis', JSON.stringify(updatedRecent))
  }

  // Load recent emojis on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('recentEmojis')
    if (saved) {
      setRecentEmojis(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="glass-effect rounded-xl shadow-strong border w-80 max-h-96 flex flex-col animate-scale-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-display font-semibold text-gray-900">Add Emoji</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <ApperIcon name="X" size={18} />
        </button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <ApperIcon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search emojis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
      </div>

      {/* Categories */}
      {!searchTerm && (
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={category.name}
            >
              {category.icon}
            </button>
          ))}
        </div>
      )}

      {/* Recent Emojis */}
      {!searchTerm && recentEmojis.length > 0 && activeCategory === 'smileys' && (
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-xs font-medium text-gray-700 mb-2">Recently Used</h4>
          <div className="grid grid-cols-8 gap-1">
            {recentEmojis.slice(0, 16).map((emoji, index) => (
              <button
                key={`recent-${index}`}
                onClick={() => handleEmojiClick(emoji)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                title={emoji.name}
              >
                {emoji.unicode}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Emoji Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredEmojis.length > 0 ? (
          <div className="grid grid-cols-8 gap-1">
            {filteredEmojis.map((emoji, index) => (
              <button
                key={`${emoji.category}-${index}`}
                onClick={() => handleEmojiClick(emoji)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                title={emoji.name}
              >
                {emoji.unicode}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <ApperIcon name="Search" size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">No emojis found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmojiPicker