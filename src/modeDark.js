export function modeDark() {                                 // Switches color Theme from light to dark and back
  const cssRoot = document.querySelector(':root');
  const cssRootStyle = getComputedStyle(cssRoot);
  const cssColorMode = cssRootStyle.getPropertyValue("--colorMode");
  const cssColorBlackTrue = cssRootStyle.getPropertyValue("--colorBlackTrue");
  const cssColorWhiteTrue = cssRootStyle.getPropertyValue("--colorWhiteTrue");
  const cssColorDark = cssRootStyle.getPropertyValue("--colorBackgroundDark");
  const cssColorLight = cssRootStyle.getPropertyValue("--colorBackgroundLight");
  const cssColorPrimaryDark = cssRootStyle.getPropertyValue("--colorPrimaryDark");
  const cssColorPrimaryLight = cssRootStyle.getPropertyValue("--colorPrimaryLight");

  if(cssColorMode == cssColorWhiteTrue){
    console.log("Activate Dark Mode");
    cssRoot.style.setProperty("--colorMode",cssColorBlackTrue);
    cssRoot.style.setProperty("--colorLight",cssColorDark);
    cssRoot.style.setProperty("--colorDark",cssColorLight);
    cssRoot.style.setProperty("--colorPrimary",cssColorPrimaryDark);
  } else if(cssColorMode == cssColorBlackTrue){
    console.log("Activate Light Mode");
    cssRoot.style.setProperty("--colorMode",cssColorWhiteTrue);
    cssRoot.style.setProperty("--colorLight",cssColorLight);
    cssRoot.style.setProperty("--colorDark",cssColorDark);
    cssRoot.style.setProperty("--colorPrimary",cssColorPrimaryLight);
  }
}
