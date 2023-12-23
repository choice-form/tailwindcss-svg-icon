import { PluginAPI } from "tailwindcss/types/config";

/* eslint-disable n/no-unsupported-features/es-syntax */
const icons = require("./icons.cjs");
import plugin from "tailwindcss/plugin";

export type SVGIconOptions = {
  /**
   * @default 'auto'
   */
  mode?: "auto";
  /**
   * @default 'icon'
   */
  classPrefix?: string;
  /**
   * @default 1
   */
  defaultSize?: number;
  /**
   * @default 'rem'
   */
  unit?: "rem" | "em" | "px";
};

function main(options: SVGIconOptions = {}) {
  const {
    mode = "auto",
    classPrefix = "icon",
    defaultSize = 1,
    unit = "rem",
  } = options;
  const defaultProps = {
    width: `${defaultSize}${unit}`,
    height: `${defaultSize}${unit}`,
  };

  /** @type {import('tailwindcss/types/config').PluginCreator} */
  return function main({ matchComponents }: PluginAPI) {
    matchComponents(
      {
        /** @argument {string | object} value */
        [classPrefix]: (value: any) => {
          if (typeof value !== "object") {
            return {};
          }
          const isMask = mode === "auto" && value.isMask;
          const props = {
            "--icon": `url("${value.base64}")`,
            "flex-shrink": 0,
            ...defaultProps,
          };

          if (isMask) {
            return {
              ...props,
              mask: "var(--icon) no-repeat",
              "mask-size": "100% 100%",
              "background-color": "currentColor",
            };
          }

          return {
            ...props,
            background: "var(--icon) no-repeat",
            "background-size": "100% 100%",
            "background-color": "transparent",
          };
        },
      },
      {
        values: icons,
      }
    );
  };
}

export default plugin.withOptions(main);
