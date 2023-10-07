import { LS_FONT_FAMILY } from "/scripts/utils/variables.js";

export function FontFamilyComponent(postRef) {
  const fontFamilyBtns = document.querySelectorAll('[name="font"]');
  
  const fontFamilyDefault = localStorage.getItem(LS_FONT_FAMILY);
  
  if (fontFamilyDefault) {
    setFontFamily(fontFamilyDefault);
    Array.from(fontFamilyBtns).find(input => input.value === fontFamilyDefault).checked = true;
  }
  
  fontFamilyBtns.forEach(input => {
    input.oninput = () => {
      setFontFamily(input.value);
      localStorage.setItem(LS_FONT_FAMILY, input.value);
    }
  })
  
  function setFontFamily(font) {
    postRef.style.fontFamily = `var(--font-family-${ font })`;
  }
}
