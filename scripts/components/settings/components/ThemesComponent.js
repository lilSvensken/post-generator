import { LS_THEME } from "/scripts/utils/variables.js";

export function ThemesComponent(postRef) {
  const themeBtns = document.querySelectorAll('[name="color-theme"]');
  const themeDefault = localStorage.getItem(LS_THEME);
  if (themeDefault) {
    const styles = JSON.parse(themeDefault);
    if (styles) setStylesColor(styles.backgroundColor, styles.color)
  }
  
  themeBtns.forEach(input => {
    input.oninput = () => {
      const inputContentRef = input.closest('label').querySelector('span');
      const inputStyles = window.getComputedStyle(inputContentRef);
      setStylesColor(
        inputStyles.backgroundColor,
        inputStyles.borderColor
      );
    }
  })
  
  function setStylesColor(backgroundColor, color) {
    postRef.style.backgroundColor = backgroundColor;
    postRef.style.color = color;
    localStorage.setItem(LS_THEME, JSON.stringify({ backgroundColor, color }));
  }
}
