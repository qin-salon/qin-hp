import type { CSSPropertiesToTokenScale, IConfig, TMedias, TTheme } from "@stitches/react";

/**
 * @package
 */
export const utils: IConfig<TMedias, TTheme, { [x: string]: any }, "", CSSPropertiesToTokenScale>["utils"] = {
  // Abbreviated margin properties
  marginX: (_config) => {
    return (value) => {
      return {
        marginLeft: value,
        marginRight: value,
      };
    };
  },
  paddingY: (_config) => {
    return (value) => {
      return {
        paddingTop: value,
        paddingBottom: value,
      };
    };
  },

  // A property for applying width/height together
  size: (_config) => {
    return (value) => {
      return {
        width: value,
        height: value,
      };
    };
  },
};
