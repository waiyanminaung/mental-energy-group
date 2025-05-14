module.exports = {
  // ... existing config ...
  theme: {
    extend: {
      keyframes: {
        'modal-slide': {
          '0%': { transform: 'scale(0.95) translateY(10px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'modal-slide': 'modal-slide 0.3s ease-out',
      },
    },
  },
}