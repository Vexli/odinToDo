export function modeDark() {           
  console.log("colorswitch activated");                      // Switches color Theme from light to dark and back
  const cssRoot = document.querySelector(":root");
  const cssRootStyle = getComputedStyle(cssRoot);
  const cssColorMode = cssRootStyle.getPropertyValue("color-scheme");

  if (cssColorMode === "light") {
    console.log("Switching mode to: ",cssColorMode);
    cssRoot.style.setProperty("color-scheme","dark");
  } else if (cssColorMode === "dark") {
    console.log("Switching mode to: ",cssColorMode);
    cssRoot.style.setProperty("color-scheme","light");
  } else {
    console.log("Switching mode: ",cssColorMode);
    cssRoot.style.setProperty("color-scheme","dark");
  }
}
