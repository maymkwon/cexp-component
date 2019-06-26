import {
  configure,
  addParameters,
  addDecorator,
  setAddon
} from "@storybook/react";
// import backgrounds from "@storybook/addon-backgrounds";
import { withA11y } from "@storybook/addon-a11y";
import JSXAddon from "storybook-addon-jsx";
addParameters({
  options: {
    panelPosition: "right"
  },
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ]
});
addDecorator(withA11y);
// addDecorator(jsxDecorator);
const req = require.context("../src/components", true, /\.stories\.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

// function loadStories() {
//   require("../src/stories");
// }
configure(loadStories, module);
