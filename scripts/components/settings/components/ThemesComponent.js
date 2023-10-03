import { LS_THEME } from "/scripts/utils/variables.js";

export function ThemesComponent(postRef) {
  const themeBtns = document.querySelectorAll('[name="color-theme"]');
  const themeDefault = localStorage.getItem(LS_THEME);
  if (themeDefault) setTheme(themeDefault);
  
  themeBtns.forEach(input => {
    input.oninput = () => {
      setTheme(input.value);
    }
  })
  
  function setTheme(theme) {
    const oldThemeClass = Array.from(postRef.classList).find(item => item.includes('post__input--'));
    if (oldThemeClass) postRef.classList.remove(oldThemeClass);
    postRef.classList.add('post__input');
    postRef.classList.add(`post__input--${theme}`);
    localStorage.setItem(LS_THEME, theme);
  }
}
