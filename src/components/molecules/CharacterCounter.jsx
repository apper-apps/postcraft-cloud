import React from 'react'

const CharacterCounter = ({ current, max = 3000 }) => {
  const percentage = (current / max) * 100
  const isNearLimit = percentage > 80
  const isOverLimit = current > max
  
  const getColor = () => {
    if (isOverLimit) return 'text-error'
    if (isNearLimit) return 'text-warning'
    return 'text-gray-600'
  }
  
  const getProgressColor = () => {
    if (isOverLimit) return 'from-error to-error/80'
    if (isNearLimit) return 'from-warning to-warning/80'
    return 'from-primary to-secondary'
  }
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="2"
            strokeDasharray={`${Math.min(percentage, 100)}, 100`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={`stop-color-gradient ${getProgressColor().split(' ')[0].replace('from-', '')}`} />
              <stop offset="100%" className={`stop-color-gradient ${getProgressColor().split(' ')[1].replace('to-', '').replace('/80', '')}`} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-semibold ${getColor()}`}>
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className={`text-sm font-medium ${getColor()}`}>
          {current.toLocaleString()} / {max.toLocaleString()}
        </span>
        <span className="text-xs text-gray-500">characters</span>
      </div>
      
      {isOverLimit && (
        <div className="text-xs text-error font-medium">
          {(current - max).toLocaleString()} over limit
        </div>
      )}
    </div>
  )
}

export default CharacterCounter