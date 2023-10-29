export function DownloadComponent(formRef, loaderRef) {
  const linkDownloadBtn = document.getElementById('link-download');
  
  linkDownloadBtn.onclick = () => {
    loaderRef.classList.remove('hide');
    formRef.classList.add("scale");
    html2canvas(formRef)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.jpg';
        link.click();
        loaderRef.classList.add('hide');
        formRef.classList.remove("scale");
      })
      .catch((err) => alert(`Ошибка скачивания: ${ err }`));
  }
}
