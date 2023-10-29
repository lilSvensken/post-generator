import { DEFAULT_FONT_SIZE, LS_FONT_SIZE } from "/scripts/utils/variables.js";

export function FontSizeComponent(postRef) {
  const fontSizeInput = document.querySelector('[name="font-size"]');
  
  const fontSizeDefault = localStorage.getItem(LS_FONT_SIZE);
  if (fontSizeDefault) {
    fontSizeInput.value = fontSizeDefault;
    setFontSize(fontSizeDefault);
  } else {
    setDefault();
  }
  
  fontSizeInput.oninput = () => {
    setFontSize(fontSizeInput.value);
  }
  
  function setDefault() {
    fontSizeInput.value = DEFAULT_FONT_SIZE;
    setFontSize(fontSizeInput.value);
  }
  
  function setFontSize(size) {
    postRef.style.fontSize = `${ size }px`;
    localStorage.setItem(LS_FONT_SIZE, size);
  }
  
  return { setDefault };
}
