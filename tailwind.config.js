// Built by following video at https://tailwindcss.com/course/setting-up-tailwind-and-postcss

module.exports = {
  important: true,
  darkMode: false, // or 'media' or 'class'

  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },

  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],

  theme: {
    screens: {
      xs: "360px",
      axs: "410px", // 'almost extra small'
      mxs: "510px", // 'medium extra small'
      qsm: "610px", // 'quite small'
      sm: "720px",
      fsm: "880px", // 'fairly small'. This must match the constant fsmBrkPt in Context.js
      md: "1024px",
      lg: "1366px",
      mxl: "1640px",
      xl: "1920px",
      xxl: "2220px",
    },

    fontSize: {
      7.5: "0.469rem",
      9: "0.563rem",
      10: "0.625rem",
      11: "0.688rem",
      12: "0.75rem",
      14: "0.875rem",
      15: "0.9375rem",
      16: "1rem",
      17: "1.063rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      25: "1.5625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      35: "2.1875rem",
      40: "2.5rem",
      42: "2.625rem",
      45: "2.8125rem",
      50: "3.125rem",
      55: "3.4375rem",
      60: "3.75rem",
      65: "4.0625rem",
      70: "4.375rem",
      80: "5rem",
      100: "6.25rem",
    },

    fontWeight: {
      light: "300",
      normal: "400", // following Tailwind nomenclature
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    fontFamily: {
      sans: ['"Acumin Pro"', "Roboto", "sans-serif"],
      serif: ['"Caslon Pro"', "Georgia", "Cambria", "serif"],
      mono: ["Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
    },

    letterSpacing: {
      0.1: "0.1px",
      0.2: "0.2px",
      0.25: "0.25px",
      0.3: "0.3px",
      0.35: "0.35px",
      0.4: "0.4px",
      0.5: "0.5px",
      0.6: "0.6px",
      0.7: "0.7px",
      0.8: "0.8px",
      1: "1.0px",
      1.1: "1.1px",
      1.2: "1.2px",
      1.4: "1.4px",
      1.6: "1.6px",
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.5: "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.75rem",
      full: "9999px",
    },

    maxWidth: {
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      18: "4.5rem",
      22: "5.5rem",
      24: "6rem",
      25: "6.25rem",
      28: "7rem",
      30: "7.5rem",
      32: "8rem",
      35: "8.75rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      66: "16.5rem",
      70: "17.5rem",
      75: "18.75rem",
      80: "20rem",
      90: "22.5rem",
      95: "23.75rem",
      100: "25rem",
      110: "27.5rem",
      120: "30rem",
      140: "35rem",
      150: "37.5rem",
      160: "40rem",
      180: "45rem",
      200: "50rem",
      220: "55rem",
      250: "62.5rem",
      300: "75rem",
      400: "100rem",
    },

    extend: {
      colors: {
        blue: {
          royal: "#2235A9",
          main: "#263EC5",
          mid: "#5B6FED",
          pale: "#818EE3",
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
          dark: "#1E2C80",
          black: "#162161", // halfway between #152063 and #17215F
          blacker: "#131F63",
          blackest: "#040F50",
        },

        gray: {
          lightest: "#fbfbfe",
          lighter: "#f7f7fd",
          light: "#F2F3FC",
          lightish: "#E0E3FC",
          line: "#D6D6D6",
          medium: "#C0C5E8",
          neutral: "#BCBCBC",
          mid: "#B2B7D3",
          dark: "#707070",
          black: "#03050F",
        },

        yellow: {
          light: "#E3B256",
          medium: "#DB981D",
          darkish: "#B1770C",
          dark: "#AC740C",
          darker: "hsl(39, 86%, 31%)", // = #93630b
        },

        lilac: {
          medium: "#E0E3FC",
          darkish: "#A2ADF5",
        },
      },

      spacing: {
        0.5: "0.125rem", // 4 Tailwind units = 1 rem = 16px
        1.5: "0.375rem",
        2.5: "0.625rem", // 10px
        3.5: "0.875rem",
        7: "1.75rem",
        8.5: "2.125rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        28: "7rem",
        30: "7.5rem",
        35: "8.75rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        50: "12.5rem",
        52: "13rem",
        55: "13.75rem",
        58: "14.5rem",
        60: "15rem",
        70: "17.5rem",
        72: "18rem",
        75: "18.75rem",
        80: "20rem",
        85: "21.25rem",
        88: "22rem",
        90: "22.5rem",
        100: "25rem",
        110: "27.5rem",
        120: "30rem", //480px
        125: "31.25rem",
        130: "32.5rem",
        135: "33.75rem",
        140: "35rem",
        145: "36.25rem",
        150: "37.5rem",
        155: "38.75rem",
        160: "40rem",
        165: "41.25rem",
        170: "42.5rem",
        175: "43.75rem", //700px
        180: "45rem", //720px
        185: "46.25", 
        190: "47.5rem", //720px
        195: "48.75rem", //720px
        200: "50rem", //800px
        210: "52.5rem", //840px
        220: "55rem", //880px
        225: "56.25rem", //900px
        230: "57.5rem",
        240: "60rem", //960px
        250: "62.5rem",
        260: "65rem",
        270: "67.5rem",
        280: "70rem",
        300: "75rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        500: "125rem",
        580: "145rem",
        600: "150rem",
        800: "200rem",
      },

      height: {
        "5/12": "41.666667%",
        "7/12": "58.333333%",
      },

      padding: {
        z: "0.05px",
      },
    },
    aspectRatio: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      36: "36",
      37: "37",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  variants: {
    extend: {
      display: ["hover", "group-hover"],
    },
  },
};
