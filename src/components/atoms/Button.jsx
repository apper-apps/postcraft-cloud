import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "btn-gradient text-white",
    secondary: "bg-white text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary/30",
    outline: "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    success: "bg-gradient-to-r from-success to-success/80 text-white hover:from-success/90 hover:to-success/70",
    warning: "bg-gradient-to-r from-warning to-warning/80 text-white hover:from-warning/90 hover:to-warning/70",
    error: "bg-gradient-to-r from-error to-error/80 text-white hover:from-error/90 hover:to-error/70"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
    xl: "px-8 py-4 text-lg gap-3"
  }
  
  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <ApperIcon name="Loader2" size={iconSize[size]} className="animate-spin" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <ApperIcon name={icon} size={iconSize[size]} />
      )}
      
      {children}
      
      {!loading && icon && iconPosition === 'right' && (
        <ApperIcon name={icon} size={iconSize[size]} />
      )}
    </button>
  )
}

export default Button