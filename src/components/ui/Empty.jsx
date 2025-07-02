import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No content yet", 
  description = "Start creating your first LinkedIn post", 
  actionText = "Get Started",
  onAction,
  icon = "FileText"
}) => {
  return (
    <div className="text-center py-12 px-4">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full flex items-center justify-center">
        <ApperIcon name={icon} size={40} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="btn-gradient text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 focus-visible"
        >
          <ApperIcon name="Plus" size={18} />
          {actionText}
        </button>
      )}
    </div>
  )
}

export default Empty