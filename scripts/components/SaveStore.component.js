import { LS_SAVE_POST } from "/scripts/utils/variables.js";

export function SaveStoreComponent(postRef) {
  const saveBtn = document.getElementById('save');
  
  const saveText = localStorage.getItem(LS_SAVE_POST);
  if (saveText) postRef.innerText = saveText;
  
  saveBtn.onclick = () => {
    localStorage.setItem(LS_SAVE_POST, postRef.innerText);
    alert("Сохранено в Local Storage");
  }
}
