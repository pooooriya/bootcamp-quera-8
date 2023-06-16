import type { GlobalStylesProps } from "@mui/material";
import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";

export const QueraKalaGlobalStyled: GlobalStylesProps["styles"] = {
  "*": {
    textDecoration: "none",
    fontFamily: "Vazirmatn",
  },
};

export const QueraKalaTheme = createTheme(
  {
    typography: {
      fontFamily: "Vazirmatn",
      allVariants: {
        color: "black",
      },
    },
    direction: "rtl",
  },
  faIR
);
