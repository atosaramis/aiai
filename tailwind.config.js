/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 8s ease-in-out infinite',
        'morph': 'morph 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob': 'blob 7s ease-in-out infinite',
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'card-hover': 'card-hover 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%', 'background-size': '200% 200%' },
          '50%': { 'background-position': '100% 50%', 'background-size': '300% 300%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-15px) rotate(2deg) scale(1.05)' },
          '50%': { transform: 'translateY(-5px) rotate(-1deg) scale(0.95)' },
          '75%': { transform: 'translateY(-10px) rotate(1deg) scale(1.02)' }
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
        },
        'pulse-glow': {
          '0%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)' },
          '100%': { 'box-shadow': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0', filter: 'blur(4px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8) rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(0)' }
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        blob: {
          '0%': { 
            'border-radius': '51% 49% 48% 52% / 62% 44% 56% 38%',
            transform: 'rotate(0deg)'
          },
          '33%': { 
            'border-radius': '45% 55% 41% 59% / 71% 37% 63% 29%',
            transform: 'rotate(120deg)'
          },
          '66%': { 
            'border-radius': '60% 40% 33% 67% / 48% 71% 29% 52%',
            transform: 'rotate(240deg)'
          },
          '100%': { 
            'border-radius': '51% 49% 48% 52% / 62% 44% 56% 38%',
            transform: 'rotate(360deg)'
          }
        },
        'text-reveal': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100%)',
            'clip-path': 'inset(100% 0 0 0)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0%)',
            'clip-path': 'inset(0% 0 0 0)'
          }
        },
        'card-hover': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'shimmer': 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  },
  plugins: [],
}