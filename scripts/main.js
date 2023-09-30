const LS_SAVE_POST = 'SAVED_POST';
const LS_FONT_FAMILY = 'FONT_FAMILY';
const LS_FONT_SIZE = 'FONT_SIZE';

const postRef = document.getElementById('post-ref');
const linkDownloadBtn = document.getElementById('link-download');
const generateTextBtn = document.getElementById('generate-text');
const saveBtn = document.getElementById('save');
const fontFamilyBtns = document.querySelectorAll('[name="font"]');
const fontSizeInput = document.querySelector('[name="font-size"]');

linkDownloadBtn.onclick = () => {
  html2canvas(postRef)
    .then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'screenshot.jpg';
      link.click();
    })
    .catch((err) => alert(`Ошибка скачивания: ${ err }`));
}

generateTextBtn.onclick = () => {
  fetch(`https://fish-text.ru/get?&type=title`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(({ text }) => {
      postRef.innerText = text;
    })
    .catch((err) => alert(`Ошибка получения рыбного текста: ${ err }`))
}

const saveText = localStorage.getItem(LS_SAVE_POST);
if (saveText) postRef.innerText = saveText;

saveBtn.onclick = () => {
  localStorage.setItem(LS_SAVE_POST, postRef.innerText);
  alert("Сохранено в Local Storage");
}

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
