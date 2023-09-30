const LS_SAVE_POST = 'SAVED_POST';
const LS_FONT_FAMILY = 'FONT_FAMILY';

const postRef = document.getElementById('post-ref');
const linkDownloadBtn = document.getElementById('link-download');
const generateTextBtn = document.getElementById('generate-text');
const saveBtn = document.getElementById('save');
const fontInputs = document.querySelectorAll('[name="font"]');

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
  Array.from(fontInputs).find(input => input.value === fontFamilyDefault).checked = true
}

fontInputs.forEach(input => {
  input.oninput = () => {
    setFontFamily(input.value);
    localStorage.setItem(LS_FONT_FAMILY, input.value)
  }
})

function setFontFamily(font) {
  postRef.style.fontFamily = `var(--font-family-${ font })`;
}
