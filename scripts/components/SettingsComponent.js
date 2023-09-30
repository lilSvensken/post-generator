import { LS_FONT_FAMILY, LS_FONT_SIZE } from "../utils/variables.js";

function SettingsComponent(postRef) {
  const fontFamilyBtns = document.querySelectorAll('[name="font"]');
  const fontSizeInput = document.querySelector('[name="font-size"]');
  
  const fontFamilyDefault = localStorage.getItem(LS_FONT_FAMILY);
  if (fontFamilyDefault) {
    setFontFamily(fontFamilyDefault);
    Array.from(fontFamilyBtns).find(input => input.value === fontFamilyDefault).checked = true
  }
  
  fontFamilyBtns.forEach(input => {
    input.oninput = () => {
      setFontFamily(input.value);
      localStorage.setItem(LS_FONT_FAMILY, input.value)
    }
  })
  
  function setFontFamily(font) {
    postRef.style.fontFamily = `var(--font-family-${ font })`;
  }
  
  ///
  
  const fontSizeDefault = localStorage.getItem(LS_FONT_SIZE);
  if (fontSizeDefault) {
    fontSizeInput.value = fontSizeDefault;
    setFontSize(fontSizeDefault);
  }
  
  fontSizeInput.oninput = () => {
    setFontSize(fontSizeInput.value);
  }
  
  function setFontSize(size) {
    postRef.style.fontSize = `${ size }px`;
    localStorage.setItem(LS_FONT_SIZE, size);
  }
}

export default SettingsComponent;
