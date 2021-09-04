// import type { CSSPropertiesToTokenScale, IConfig, TMedias, TTheme } from "@stitches/react";

import type Stitches from "@stitches/react/types/stitches";

/**
 * @package
 */
export const utils: Stitches["config"]["utils"] = {
  // Abbreviated margin properties
  marginX: (value) => {
    return {
      marginLeft: value,
      marginRight: value,
    };
  },
  paddingY: (value) => {
    return {
      paddingTop: value,
      paddingBottom: value,
    };
  },

  // A property for applying width/height together
  size: (value) => {
    return {
      width: value,
      height: value,
    };
  },
};
