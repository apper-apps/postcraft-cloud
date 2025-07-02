import React from 'react'

const Input = ({ 
  label, 
  error, 
  helper, 
  className = '', 
  required = false,
  ...props 
}) => {
  const inputClasses = `
    w-full px-4 py-2.5 bg-white border rounded-lg font-body text-gray-900 placeholder-gray-500
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
    ${error 
      ? 'border-error focus:ring-error/50 focus:border-error' 
      : 'border-gray-300 hover:border-gray-400'
    }
    ${className}
  `
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <input
        className={inputClasses}
        {...props}
      />
      
      {error && (
        <p className="mt-2 text-sm text-error">{error}</p>
      )}
      
      {helper && !error && (
        <p className="mt-2 text-sm text-gray-600">{helper}</p>
      )}
    </div>
  )
}

export default Input