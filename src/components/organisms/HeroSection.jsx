import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const HeroSection = ({ onStartClick }) => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <ApperIcon name="PenTool" size={20} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold text-gray-900">PostCraft</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Create Engaging{' '}
            <span className="text-gradient">LinkedIn Posts</span>{' '}
            with Professional Formatting
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your ideas into perfectly formatted LinkedIn posts with rich text formatting, 
            emojis, and real-time preview. Stand out in your network with professional content.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Button
              onClick={onStartClick}
              size="xl"
              icon="ArrowRight"
              iconPosition="right"
              className="shadow-strong hover:shadow-medium"
            >
              Start Formatting Your Post
            </Button>
          </motion.div>

          {/* Features showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Type" size={24} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">Rich Text Formatting</h3>
              <p className="text-sm text-gray-600">Bold, italic, underline, strikethrough, and list formatting</p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Smile" size={24} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">Emoji Picker</h3>
              <p className="text-sm text-gray-600">Comprehensive emoji library with search and categories</p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Eye" size={24} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">Live Preview</h3>
              <p className="text-sm text-gray-600">See exactly how your post will look on LinkedIn</p>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-4">Trusted by content creators and marketing professionals</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <ApperIcon name="Users" size={16} />
                <span className="text-sm">Content Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="Briefcase" size={16} />
                <span className="text-sm">Marketing Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="TrendingUp" size={16} />
                <span className="text-sm">Social Media Managers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection