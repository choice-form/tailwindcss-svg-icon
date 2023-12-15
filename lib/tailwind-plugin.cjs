/* eslint-disable n/no-unsupported-features/es-syntax */
const icons = require("./icons.cjs");
const plugin = require("tailwindcss/plugin");

function main(options = {}) {
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
  return function main({ matchComponents }) {
    matchComponents(
      {
        /** @argument {string | object} value */
        [classPrefix]: (value) => {
          if (typeof value !== "object") {
            return;
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

module.exports = plugin.withOptions(main);
