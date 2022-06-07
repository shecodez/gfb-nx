const colors = require('tailwindcss/colors');

var colorVars = function (color, brightness = 600) {
  return {
    lightest: color[brightness - 300],
    lighter: color[brightness - 200],
    light: color[brightness - 100],
    default: color[brightness],
    dark: color[brightness + 100],
    darker: color[brightness + 200],
    darkest: color[brightness + 300],
  };
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#15284B',
        secondary: '#981A32',
        accent: '#ABC8E7',
        dark: '#111820',
        light: '#DBD9D6',
        info: colorVars(colors.sky, 400),
        success: colorVars(colors.emerald, 400),
        warning: colorVars(colors.amber, 400),
        error: colorVars(colors.red, 400),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
