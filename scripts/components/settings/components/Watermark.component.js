import { LS_WATERMARK } from "/scripts/utils/variables.js";

export function WatermarkComponent(formRef) {
  const watermarkBtns = document.querySelectorAll("[name='watermark']");
  const watermarkDefault = localStorage.getItem(LS_WATERMARK);
  
  if (watermarkDefault) {
    setWatermark(watermarkDefault);
    Array.from(watermarkBtns).find(input => input.value === watermarkDefault).checked = true;
  }
  
  watermarkBtns.forEach(input => {
    input.oninput = () => {
      setWatermark(input.value);
      localStorage.setItem(LS_WATERMARK, input.value);
    }
  })
  
  function setWatermark(watermark) {
    const watermarkRef = document.createElement('img');
    watermarkRef.setAttribute('src', `assets/icons/watermarks/${ watermark }.png`);
    watermarkRef.classList.add('post__watermark');
    formRef.appendChild(watermarkRef);
    localStorage.setItem(LS_WATERMARK, watermark);
  }
}
