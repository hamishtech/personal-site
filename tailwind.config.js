const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
