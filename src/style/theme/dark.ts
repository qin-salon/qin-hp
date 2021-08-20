import { blueDark, grayDark, greenDark, redDark } from "@radix-ui/colors";

import { theme } from "../stitches.config";

/**
 * @package
 */
export const dark = theme("dark-theme", {
  colors: { ...grayDark, ...blueDark, ...redDark, ...greenDark },
});
