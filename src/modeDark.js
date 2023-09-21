export function modeDark() {                                 // Switches color Theme from light to dark and back
  const cssRoot = document.querySelector(':root');
  const cssRootStyle = getComputedStyle(cssRoot);
  const cssColorMode = cssRootStyle.getPropertyValue("--colorMode");
  const cssColorBlackTrue = cssRootStyle.getPropertyValue("--colorBlackTrue");
  const cssColorWhiteTrue = cssRootStyle.getPropertyValue("--colorWhiteTrue");
  const cssColorBlueDark = cssRootStyle.getPropertyValue("--colorBlueDark");
  const cssColorBeige = cssRootStyle.getPropertyValue("--colorBeige");

  if(cssColorMode == cssColorWhiteTrue){
    console.log("Activate Dark Mode");
    cssRoot.style.setProperty("--colorMode",cssColorBlackTrue);
    cssRoot.style.setProperty("--beige2Blue",cssColorBlueDark);
    cssRoot.style.setProperty("--blue2Beige",cssColorBeige);
  } else if(cssColorMode == cssColorBlackTrue){
    console.log("Activate Light Mode");
    cssRoot.style.setProperty("--colorMode",cssColorWhiteTrue);
    cssRoot.style.setProperty("--beige2Blue",cssColorBeige);
    cssRoot.style.setProperty("--blue2Beige",cssColorBlueDark);
  }
}
