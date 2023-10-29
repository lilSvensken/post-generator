export function DownloadComponent(postRef, loaderRef) {
  const linkDownloadBtn = document.getElementById('link-download');
  
  linkDownloadBtn.onclick = () => {
    loaderRef.classList.remove('hide');
    postRef.classList.add("post__input--scale");
    html2canvas(postRef)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.jpg';
        link.click();
        loaderRef.classList.add('hide');
        postRef.classList.remove("post__input--scale");
      })
      .catch((err) => alert(`Ошибка скачивания: ${ err }`));
  }
}
