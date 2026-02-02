// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'slide': 'slide 12s infinite',
        'fade': 'fade 8s infinite',
        'fade-delay': 'fade 8s infinite 2.66s',
        'fade-delay-2': 'fade 8s infinite 5.33s',
        'rotate3d': 'rotate3d 8s infinite linear',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '33%': { transform: 'translateX(-100%)' },
          '66%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fade: {
          '0%, 33%, 100%': { opacity: 0 },
          '16%, 33%': { opacity: 1 },
        },
        rotate3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(90deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '75%': { transform: 'rotateY(270deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-90': 'rotateY(90deg)',
        'y-180': 'rotateY(180deg)',
        '-y-90': 'rotateY(-90deg)',
      },
    },
  },
}