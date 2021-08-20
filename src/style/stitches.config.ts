import { blue, gray, green, red } from "@radix-ui/colors";
import { createCss } from "@stitches/react";

import { utils } from "./utils";

/**
 * @package
 */
export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  utils,
  theme: { colors: { ...gray, ...blue, ...red, ...green } },
  media: { bp1: "(min-width: 640px)" },
});

global({
  html: { fontSize: "14px" },
  "@bp1": { html: { fontSize: "16px" } },
  body: {
    fontWeight: 800,
    lineHeight: 1.6,
  },
})();
