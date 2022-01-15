import typography from "assets/theme-dark/base/typography";

// Prastuti  2 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
