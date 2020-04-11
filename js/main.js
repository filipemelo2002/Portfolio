const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=switcher]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  contentColor: getStyle(html, "--content-color"),
  hightlight: getStyle(html, "--hightlight"),
  colorHover: getStyle(html, "--color-hover"),
  color: getStyle(html, "--color"),
  assetColour: getStyle(html, "--asset-colour"),
  bg: getStyle(html, "--bg"),
  bgPanels: getStyle(html, "--bg-panels"),
};

const darkMode = {
  contentColor: "#adadad",
  hightlight: "#ffac41",
  colorHover: "#fff",
  color: "#f3f3f3",
  assetColour: "#0a60ff",
  bg: "#252525",
  bgPanels: "#070707",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
const changeTheme = (colors) => {
  Object.keys(colors).map((key) => {
    html.style.setProperty(transformKey(key), colors[key]);
  });
};
checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeTheme(darkMode) : changeTheme(initialColors);
});
