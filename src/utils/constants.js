// LinkedIn Post Constants
export const LINKEDIN_LIMITS = {
  MAX_CHARACTERS: 3000,
  MAX_HASHTAGS_RECOMMENDED: 3,
  MAX_HASHTAGS_LIMIT: 30,
  MIN_WORDS_RECOMMENDED: 10,
  MAX_WORDS_RECOMMENDED: 300,
  MAX_LINES_BEFORE_TRUNCATION: 3
}

// Formatting Constants
export const FORMATTING_TYPES = {
  BOLD: 'bold',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
  STRIKETHROUGH: 'strikethrough',
  BULLET_LIST: 'bullet',
  NUMBERED_LIST: 'number',
  HASHTAG: 'hashtag',
  EMOJI: 'emoji'
}

// Emoji Categories
export const EMOJI_CATEGORIES = {
  SMILEYS: 'smileys',
  ANIMALS: 'animals',
  FOOD: 'food',
  ACTIVITIES: 'activities',
  TRAVEL: 'travel',
  OBJECTS: 'objects',
  SYMBOLS: 'symbols',
  FLAGS: 'flags'
}

// Storage Keys
export const STORAGE_KEYS = {
  POST_CONTENT: 'postcraft_content',
  POST_HISTORY: 'postcraft_history',
  RECENT_EMOJIS: 'recentEmojis',
  USER_PREFERENCES: 'postcraft_preferences'
}

// Color Themes
export const THEMES = {
  LIGHT: {
    primary: '#0A66C2',
    secondary: '#70B5F9',
    accent: '#5E9CEA',
    surface: '#FFFFFF',
    background: '#F3F6F8',
    text: '#1F2937',
    textSecondary: '#6B7280'
  },
  DARK: {
    primary: '#70B5F9',
    secondary: '#0A66C2',
    accent: '#5E9CEA',
    surface: '#1F2937',
    background: '#111827',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB'
  }
}

// Animation Durations
export const ANIMATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 1000
}

// Keyboard Shortcuts
export const KEYBOARD_SHORTCUTS = {
  BOLD: { key: 'b', ctrl: true, action: 'bold' },
  ITALIC: { key: 'i', ctrl: true, action: 'italic' },
  UNDERLINE: { key: 'u', ctrl: true, action: 'underline' },
  SAVE: { key: 's', ctrl: true, action: 'save' },
  COPY: { key: 'c', ctrl: true, shift: true, action: 'copy' },
  EXPORT: { key: 'e', ctrl: true, action: 'export' }
}

// Validation Messages
export const VALIDATION_MESSAGES = {
  EMPTY_CONTENT: 'Post content cannot be empty',
  EXCEEDS_LIMIT: 'Post exceeds LinkedIn\'s character limit',
  TOO_MANY_HASHTAGS: 'Consider using fewer hashtags (1-3 is optimal)',
  NO_HASHTAGS: 'Consider adding hashtags to increase visibility',
  TOO_SHORT: 'Very short posts may get less engagement',
  TOO_LONG: 'Long posts may be truncated in the feed'
}

// Success Messages
export const SUCCESS_MESSAGES = {
  COPIED: 'Post copied to clipboard!',
  EXPORTED: 'Post exported successfully!',
  SAVED: 'Post saved automatically!',
  FORMATTED: 'Formatting applied!',
  EMOJI_ADDED: 'Emoji added!',
  CLEARED: 'Content cleared!'
}

// Error Messages
export const ERROR_MESSAGES = {
  COPY_FAILED: 'Failed to copy to clipboard',
  EXPORT_FAILED: 'Failed to export file',
  SAVE_FAILED: 'Failed to save content',
  LOAD_FAILED: 'Failed to load content',
  GENERIC: 'Something went wrong. Please try again.'
}

// LinkedIn Post Best Practices
export const BEST_PRACTICES = {
  ENGAGEMENT_TIPS: [
    'Posts with 1-3 hashtags tend to perform better',
    'Ask questions to encourage comments',
    'Share personal insights and experiences',
    'Use line breaks for better readability',
    'Include a call-to-action',
    'Post consistently to build audience',
    'Engage with comments on your posts',
    'Use storytelling to connect with audience'
  ],
  FORMATTING_TIPS: [
    'Use bold text to highlight key points',
    'Break up long paragraphs with line breaks',
    'Use bullet points for lists',
    'Emojis can add personality but use sparingly',
    'Include relevant hashtags at the end',
    'Tag relevant people with @mentions',
    'Use clear and concise language',
    'Proofread before posting'
  ],
  TIMING_TIPS: [
    'Best times: Tuesday-Thursday, 9-10 AM',
    'Avoid posting late at night',
    'Post during business hours for B2B content',
    'Test different times to find your audience\'s peak',
    'Consistency is more important than perfect timing'
  ]
}

// File Export Settings
export const EXPORT_SETTINGS = {
  DEFAULT_FILENAME: 'linkedin-post',
  FILE_EXTENSION: '.txt',
  MIME_TYPE: 'text/plain',
  ENCODING: 'utf-8'
}

// Feature Flags (for future development)
export const FEATURES = {
  AUTO_SAVE: true,
  EMOJI_PICKER: true,
  EXPORT_TO_FILE: true,
  POST_HISTORY: true,
  KEYBOARD_SHORTCUTS: true,
  REAL_TIME_PREVIEW: true,
  CHARACTER_COUNTER: true,
  POST_ANALYTICS: true,
  DARK_MODE: false, // Future feature
  TEMPLATES: false, // Future feature
  COLLABORATION: false // Future feature
}

export default {
  LINKEDIN_LIMITS,
  FORMATTING_TYPES,
  EMOJI_CATEGORIES,
  STORAGE_KEYS,
  THEMES,
  ANIMATIONS,
  KEYBOARD_SHORTCUTS,
  VALIDATION_MESSAGES,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  BEST_PRACTICES,
  EXPORT_SETTINGS,
  FEATURES
}