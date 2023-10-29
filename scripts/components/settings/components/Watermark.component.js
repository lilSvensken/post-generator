import { LS_WATERMARK } from "/scripts/utils/variables.js";

export function WatermarkComponent(formRef) {
  const watermarkBtns = Array.from(document.querySelectorAll("[name='watermark']"));
  const watermarkDefault = localStorage.getItem(LS_WATERMARK);
  
  if (watermarkDefault) {
    setWatermark(watermarkDefault);
    Array.from(watermarkBtns).find(input => input.value === watermarkDefault).checked = true;
  } else {
    setDefault();
  }
  
  watermarkBtns.forEach(input => {
    input.oninput = () => {
      setWatermark(input.value);
      localStorage.setItem(LS_WATERMARK, input.value);
    }
  })
  
  function setDefault() {
    const activeInput = watermarkBtns[0];
    activeInput.checked = true;
    setWatermark(activeInput.value);
  }
  
  function setWatermark(watermark) {
    let watermarkRef = document.getElementById('watermark');
    if (!watermarkRef) {
      watermarkRef = document.createElement('img');
    }
    if (watermark) {
      watermarkRef.setAttribute('src', `assets/icons/watermarks/${ watermark }.png`);
      watermarkRef.classList.add('post__watermark');
      watermarkRef.id = 'watermark';
      watermarkRef.classList.remove('hide');
      formRef.appendChild(watermarkRef);
      localStorage.setItem(LS_WATERMARK, watermark);
    } else {
      watermarkRef.setAttribute('src', '');
      watermarkRef.classList.add('hide');
    }
  }
  
  return { setDefault };
}
