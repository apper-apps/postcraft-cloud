import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-6 shimmer"></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-8 shimmer"></div>
            <div className="h-12 w-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-auto shimmer"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel Skeleton */}
          <div className="space-y-6">
            <div className="card-gradient rounded-xl p-6 shadow-soft">
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 shimmer"></div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-10 w-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer"></div>
                ))}
              </div>
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer"></div>
            </div>
          </div>

          {/* Right Panel Skeleton */}
          <div className="space-y-6">
            <div className="card-gradient rounded-xl p-6 shadow-soft">
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 shimmer"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 shimmer"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 shimmer"></div>
              </div>
              <div className="mt-6 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading