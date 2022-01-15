import borders from "assets/theme-dark/base/borders";

// Prastuti  2 PRO React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};
