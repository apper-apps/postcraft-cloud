import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import AppIcon from "@/components/atoms/AppIcon";
import PostEditor from "@/components/organisms/PostEditor";
import PostPreview from "@/components/organisms/PostPreview";
import HeroSection from "@/components/organisms/HeroSection";

export default function HomePage() {
  const [postContent, setPostContent] = useState('')
  const editorRef = useRef(null)

  const handleStartClick = () => {
    editorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleContentChange = (newContent) => {
    setPostContent(newContent)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartClick={handleStartClick} />

      {/* Main Editor Interface */}
      <section ref={editorRef} className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Format Your LinkedIn Post
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our intuitive editor to create engaging posts with professional formatting. 
              See your changes in real-time with our LinkedIn-style preview.
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Editor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="lg:sticky lg:top-8">
                <PostEditor onContentChange={handleContentChange} />
              </div>
            </motion.div>

            {/* Right Panel - Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="lg:sticky lg:top-8">
                <PostPreview content={postContent} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Everything You Need for Great Posts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional formatting tools that help you create engaging LinkedIn content 
              that stands out in your network's feed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Type',
                title: 'Rich Text Formatting',
                description: 'Bold, italic, underline, strikethrough, and list formatting to make your text stand out.',
                color: 'from-primary to-primary/80'
              },
              {
                icon: 'Smile',
                title: 'Comprehensive Emoji Library',
                description: 'Access thousands of emojis with search functionality and organized categories.',
                color: 'from-secondary to-secondary/80'
              },
              {
                icon: 'Eye',
                title: 'Real-time LinkedIn Preview',
                description: 'See exactly how your post will appear on LinkedIn before you publish it.',
                color: 'from-accent to-accent/80'
              },
              {
                icon: 'Hash',
                title: 'Hashtag Helper',
                description: 'Easily format hashtags and track them in your post statistics.',
                color: 'from-success to-success/80'
              },
              {
                icon: 'Copy',
                title: 'One-Click Copy',
                description: 'Copy your formatted post to clipboard with a single click for easy pasting.',
                color: 'from-warning to-warning/80'
              },
              {
                icon: 'BarChart3',
                title: 'Post Analytics',
                description: 'Track word count, character count, hashtags, and other useful statistics.',
                color: 'from-info to-info/80'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <AppIcon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
<div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <AppIcon name="PenTool" size={16} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold">PostCraft</span>
            </div>
            <p className="text-gray-400 mb-6">
              Create engaging LinkedIn posts with professional formatting
            </p>
            <div className="text-sm text-gray-500">
              Made with ❤️ for LinkedIn content creators
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
