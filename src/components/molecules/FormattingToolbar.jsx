import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const FormattingToolbar = ({ onFormat, onToggleEmoji }) => {
  const formatButtons = [
    { icon: 'Bold', action: 'bold', tooltip: 'Bold (Ctrl+B)' },
    { icon: 'Italic', action: 'italic', tooltip: 'Italic (Ctrl+I)' },
    { icon: 'Underline', action: 'underline', tooltip: 'Underline (Ctrl+U)' },
    { icon: 'Strikethrough', action: 'strikethrough', tooltip: 'Strikethrough' },
  ]
  
  const listButtons = [
    { icon: 'List', action: 'bullet', tooltip: 'Bullet List' },
    { icon: 'ListOrdered', action: 'number', tooltip: 'Numbered List' },
  ]
  
  const utilityButtons = [
    { icon: 'Hash', action: 'hashtag', tooltip: 'Add Hashtag' },
    { icon: 'Smile', action: 'emoji', tooltip: 'Add Emoji' },
  ]

  const handleButtonClick = (action) => {
    if (action === 'emoji') {
      onToggleEmoji()
    } else {
      onFormat(action)
    }
  }

  const ToolbarGroup = ({ buttons, title }) => (
    <div className="flex items-center gap-1">
      {buttons.map((button, index) => (
        <button
          key={button.action}
          onClick={() => handleButtonClick(button.action)}
          className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 focus-visible"
          title={button.tooltip}
        >
          <ApperIcon name={button.icon} size={18} />
        </button>
      ))}
    </div>
  )

  return (
    <div className="glass-effect rounded-xl p-4 shadow-soft border">
      <div className="flex flex-wrap items-center gap-4">
        <ToolbarGroup buttons={formatButtons} title="Text Formatting" />
        
        <div className="w-px h-6 bg-gray-300"></div>
        
        <ToolbarGroup buttons={listButtons} title="Lists" />
        
        <div className="w-px h-6 bg-gray-300"></div>
        
        <ToolbarGroup buttons={utilityButtons} title="Utilities" />
      </div>
    </div>
  )
}

export default FormattingToolbar