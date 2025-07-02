import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'

const PostPreview = ({ content }) => {
  const [copied, setCopied] = useState(false)

  // Format content for LinkedIn preview
  const formatContentForPreview = (text) => {
    if (!text) return ''

    let formatted = text
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Underline text
      .replace(/__(.*?)__/g, '<u>$1</u>')
      // Strikethrough text
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      // Line breaks
      .replace(/\n/g, '<br>')
      // Hashtags
      .replace(/#(\w+)/g, '<span class="text-primary font-medium">#$1</span>')

    return formatted
  }

  // Copy to clipboard
  const handleCopy = async () => {
    if (!content.trim()) {
      toast.warning('No content to copy!')
      return
    }

    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      toast.success('Post copied to clipboard!')
      
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy to clipboard')
    }
  }

  // Export as text file
  const handleExport = () => {
    if (!content.trim()) {
      toast.warning('No content to export!')
      return
    }

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `linkedin-post-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success('Post exported successfully!')
  }

  // Get stats
  const getStats = () => {
    if (!content) return { words: 0, lines: 0, hashtags: 0, mentions: 0 }
    
    const words = content.trim().split(/\s+/).filter(word => word.length > 0).length
    const lines = content.split('\n').length
    const hashtags = (content.match(/#\w+/g) || []).length
    const mentions = (content.match(/@\w+/g) || []).length
    
    return { words, lines, hashtags, mentions }
  }

  const stats = getStats()

  return (
    <div className="space-y-6">
      {/* Preview Panel */}
      <div className="card-gradient rounded-xl p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold text-gray-900">
            LinkedIn Preview
          </h3>
          <Badge variant="primary" size="sm">
            Live Preview
          </Badge>
        </div>

        {/* LinkedIn-style post preview */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          {/* Mock LinkedIn header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <ApperIcon name="User" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Your Name</div>
              <div className="text-sm text-gray-600">Your Professional Title</div>
              <div className="text-xs text-gray-500">Now</div>
            </div>
          </div>

          {/* Post content */}
          <div className="text-gray-900 leading-relaxed">
            {content ? (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: formatContentForPreview(content) 
                }}
                className="whitespace-pre-wrap"
              />
            ) : (
              <div className="text-gray-400 italic">
                Your formatted post will appear here as you type...
              </div>
            )}
          </div>

          {/* Mock LinkedIn engagement */}
          {content && (
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ApperIcon name="ThumbsUp" size={16} />
                    Like
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ApperIcon name="MessageCircle" size={16} />
                    Comment
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ApperIcon name="Share" size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleCopy}
            icon={copied ? "Check" : "Copy"}
            variant={copied ? "success" : "primary"}
            className="flex-1"
            disabled={!content.trim()}
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
          
          <Button
            onClick={handleExport}
            icon="Download"
            variant="secondary"
            className="flex-1"
            disabled={!content.trim()}
          >
            Export as File
          </Button>
        </div>
      </div>

      {/* Post Statistics */}
      <div className="card-gradient rounded-xl p-6 shadow-soft">
        <h3 className="text-lg font-display font-semibold text-gray-900 mb-4">
          Post Statistics
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-primary">{stats.words}</div>
            <div className="text-sm text-gray-600">Words</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg">
            <div className="text-2xl font-bold text-secondary">{stats.lines}</div>
            <div className="text-sm text-gray-600">Lines</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg">
            <div className="text-2xl font-bold text-accent">{stats.hashtags}</div>
            <div className="text-sm text-gray-600">Hashtags</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-success/5 to-success/10 rounded-lg">
            <div className="text-2xl font-bold text-success">{content.length}</div>
            <div className="text-sm text-gray-600">Characters</div>
          </div>
        </div>

        {/* Engagement tips */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <ApperIcon name="Lightbulb" size={16} className="text-primary" />
            Engagement Tips
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Posts with 1-3 hashtags tend to perform better</li>
            <li>• Ask questions to encourage comments</li>
            <li>• Share personal insights and experiences</li>
            <li>• Use line breaks for better readability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostPreview