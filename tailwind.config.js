/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'animation': {
        'text':'text',
        'link-in':'link-in',
        'link-out':'link-out',
        'sliding-up':'sliding-up'
      },
      'keyframes': {
          'sliding-up':{
            '0%':{
              'transform':'translateY(0)'
            },
            '100%':{
              'transform':'translateY(-100%)'
            }
          },
          'sliding-down':{
            '0%':{
              'transform':'translateY(-100%)'
            },
            '100%':{
              'transform':'translateY(0%)'
            }
          },
          'link-in':{
            '0%':{
              'width':'0%'
            },
            '100%':{
              'width':'128px'
            }
          },
          'link-out':{
            '0%':{
              'width':'128px'
            },
            '100%':{
              'width':'0%'
            }
          },
          'text': {
              '0%,15%,85%,100%': {
                'width':'0%'
              },
              '35%, 50%, 65%': {
                'width':'100%'
              }
          },
      },
      colors:{
        'yellow':'#FFB800',
        'white':'#FFFFFF',
        'grey':'#1F1F1F',
        'grey2':'#2D2D2D',
        'grey3':'#D9D9D9'
      },
      spacing: {
        '9': '3rem',
        '10': '4rem',
        '11': '4.5rem',
        '12': '10rem',
        '20':'218px',
        '1000':'80rem',
        'line1':'140px',
        '128':'128px',
        'linemargin':'90px',
        'line2':'67px'
      }
    },
  },
  plugins: [
  ]
}

