export function GenerateTextComponent(postRef) {
  const generateTextBtn = document.getElementById('generate-text');
  
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
}
