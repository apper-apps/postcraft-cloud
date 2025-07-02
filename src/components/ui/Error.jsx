import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-error/10 to-error/5 rounded-full flex items-center justify-center">
          <ApperIcon name="AlertTriangle" size={40} className="text-error" />
        </div>
        
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {message}
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-gradient text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 focus-visible"
          >
            <ApperIcon name="RefreshCw" size={18} />
            Try Again
          </button>
        )}
        
        <div className="mt-8 text-sm text-gray-500">
          If the problem persists, please refresh the page or try again later.
        </div>
      </div>
    </div>
  )
}

export default Error