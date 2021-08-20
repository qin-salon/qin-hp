import { blue, gray, green, red } from "@radix-ui/colors";
import { createCss } from "@stitches/react";

import { utils } from "./utils";

/**
 * @package
 */
export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  utils,
  theme: { colors: { ...gray, ...blue, ...red, ...green } },
});
