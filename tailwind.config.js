// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeInUpReverse: {
                    '0%': { opacity: 0, transform: 'translateY(12px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-reverse': 'fadeInUpReverse 0.8s ease-out forwards',
            },
        },
    },
}
