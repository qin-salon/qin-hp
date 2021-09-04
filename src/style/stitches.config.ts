import {
  amber,
  blackA,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  gray,
  green,
  indigo,
  lime,
  mauve,
  mint,
  olive,
  orange,
  pink,
  plum,
  purple,
  red,
  sage,
  sand,
  sky,
  slate,
  teal,
  tomato,
  violet,
  yellow,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import type { CSS } from "@stitches/react/types/css-util";

/**
 * @package
 */
export const { styled, css, globalCss, keyframes, getCssText, createTheme, theme } = createStitches({
  media: {
    bp1: "(min-width: 640px)",
  },
  utils: {
    marginX: (value: CSS[keyof CSS]) => {
      return { marginLeft: value, marginRight: value };
    },
    paddingY: (value: CSS[keyof CSS]) => {
      return { paddingTop: value, paddingBottom: value };
    },
    size: (value: CSS[keyof CSS]) => {
      return { width: value, height: value };
    },
  },
  theme: {
    colors: {
      ...amber,
      ...blue,
      ...bronze,
      ...brown,
      ...crimson,
      ...cyan,
      ...gold,
      ...grass,
      ...gray,
      ...green,
      ...indigo,
      ...lime,
      ...mauve,
      ...mint,
      ...olive,
      ...orange,
      ...pink,
      ...plum,
      ...purple,
      ...red,
      ...sage,
      ...sand,
      ...sky,
      ...slate,
      ...teal,
      ...tomato,
      ...violet,
      ...yellow,
      ...blackA,
    },
  },
});

globalCss({
  html: { fontSize: "13px" },
  "@bp1": { html: { fontSize: "16px" } },
  body: { fontWeight: 800, lineHeight: 1.6, color: "$gray12", backgroundColor: "$gray2" },
})();
