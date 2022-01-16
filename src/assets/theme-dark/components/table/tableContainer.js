import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: background.card,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};
