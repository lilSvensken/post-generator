export function DownloadComponent(postRef) {
  const linkDownloadBtn = document.getElementById('link-download');
  
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
}
