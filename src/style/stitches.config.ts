import {
  amber,
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
import { createCss } from "@stitches/react";

import { utils } from "./utils";

/**
 * @package
 */
export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  utils,
  media: { bp1: "(min-width: 640px)" },
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
    },
  },
});

global({
  html: { fontSize: "13px" },
  "@bp1": { html: { fontSize: "16px" } },
  body: { fontWeight: 800, lineHeight: 1.6, color: "$gray12", backgroundColor: "$gray2" },
})();
