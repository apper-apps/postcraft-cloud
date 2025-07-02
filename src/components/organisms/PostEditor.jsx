import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import FormattingToolbar from '@/components/molecules/FormattingToolbar'
import CharacterCounter from '@/components/molecules/CharacterCounter'
import EmojiPicker from '@/components/molecules/EmojiPicker'
import Textarea from '@/components/atoms/Textarea'
import postService from '@/services/api/postService'

const PostEditor = ({ onContentChange }) => {
  const [content, setContent] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)
  const textareaRef = useRef(null)
  const emojiPickerRef = useRef(null)

  // Load saved content on mount
  useEffect(() => {
    const savedContent = postService.loadFromStorage()
    if (savedContent) {
      setContent(savedContent)
      onContentChange(savedContent)
    }
  }, [onContentChange])

  // Auto-save content
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (content.trim()) {
        postService.saveToStorage(content)
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [content])

  // Handle content change
  const handleContentChange = (e) => {
    const newContent = e.target.value
    setContent(newContent)
    onContentChange(newContent)
  }

  // Store selection for formatting
  const handleSelectionChange = () => {
    if (textareaRef.current) {
      setSelectionStart(textareaRef.current.selectionStart)
      setSelectionEnd(textareaRef.current.selectionEnd)
    }
  }

  // Format text
  const handleFormat = (formatType) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    let formattedText = selectedText

    switch (formatType) {
      case 'bold':
        formattedText = `**${selectedText}**`
        break
      case 'italic':
        formattedText = `*${selectedText}*`
        break
      case 'underline':
        formattedText = `__${selectedText}__`
        break
      case 'strikethrough':
        formattedText = `~~${selectedText}~~`
        break
      case 'bullet':
        const bulletLines = selectedText.split('\n').map(line => 
          line.trim() ? `• ${line.trim()}` : line
        ).join('\n')
        formattedText = bulletLines
        break
      case 'number':
        const numberedLines = selectedText.split('\n').map((line, index) => 
          line.trim() ? `${index + 1}. ${line.trim()}` : line
        ).join('\n')
        formattedText = numberedLines
        break
      case 'hashtag':
        if (selectedText) {
          formattedText = `#${selectedText.replace(/\s+/g, '')}`
        } else {
          formattedText = '#'
        }
        break
      default:
        return
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end)
    setContent(newContent)
    onContentChange(newContent)

    // Restore focus and selection
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + formattedText.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)

    toast.success(`${formatType.charAt(0).toUpperCase() + formatType.slice(1)} formatting applied!`)
  }

  // Insert emoji
  const handleEmojiSelect = (emoji) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const cursorPos = textarea.selectionStart
    const newContent = content.substring(0, cursorPos) + emoji + content.substring(cursorPos)
    
    setContent(newContent)
    onContentChange(newContent)
    setShowEmojiPicker(false)

    // Restore focus and move cursor
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = cursorPos + emoji.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)

    toast.success('Emoji added!')
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault()
          handleFormat('bold')
          break
        case 'i':
          e.preventDefault()
          handleFormat('italic')
          break
        case 'u':
          e.preventDefault()
          handleFormat('underline')
          break
        default:
          break
      }
    }
  }

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false)
      }
    }

    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showEmojiPicker])

  // Clear content
  const handleClear = () => {
    if (content.trim() && window.confirm('Are you sure you want to clear all content?')) {
      setContent('')
      onContentChange('')
      postService.clearStorage()
      toast.success('Content cleared!')
    }
  }

  return (
    <div className="space-y-6">
      {/* Formatting Toolbar */}
      <FormattingToolbar 
        onFormat={handleFormat}
        onToggleEmoji={() => setShowEmojiPicker(!showEmojiPicker)}
      />

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="relative z-50" ref={emojiPickerRef}>
          <div className="absolute top-0 left-0">
            <EmojiPicker 
              onEmojiSelect={handleEmojiSelect}
              onClose={() => setShowEmojiPicker(false)}
            />
          </div>
        </div>
      )}

      {/* Text Editor */}
      <div className="card-gradient rounded-xl p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold text-gray-900">
            Compose Your Post
          </h3>
          {content.trim() && (
            <button
              onClick={handleClear}
              className="text-sm text-gray-500 hover:text-error transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        <Textarea
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          onSelect={handleSelectionChange}
          onKeyDown={handleKeyDown}
          placeholder="Start writing your LinkedIn post here... Use the toolbar above to format your text, add emojis, and create engaging content that stands out!"
          rows={12}
          className="resize-none text-base leading-relaxed"
        />

        {/* Character Counter */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Tip: Use formatting to make your post more engaging!
          </div>
          <CharacterCounter current={content.length} max={3000} />
        </div>
      </div>
    </div>
  )
}

export default PostEditor