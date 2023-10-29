import SettingsComponent from "./components/settings/Settings.component.js";
import { DownloadComponent } from "./components/Download.component.js";
import { GenerateTextComponent } from "./components/GenerateText.component.js";
import { SaveStoreComponent } from "./components/SaveStore.component.js";
import { InputPostComponent } from "./components/InputPost.component.js";

MainComponent();

function MainComponent() {
  const formRef = document.getElementById('form-ref');
  const postRef = document.getElementById('post-ref');
  const loaderRef = document.getElementById('loader');
  
  InputPostComponent(postRef);
  const { fontFamilyComponent, fontSizeComponent, themesComponent, watermarkComponent } =
    SettingsComponent(formRef, postRef);
  DownloadComponent(formRef, loaderRef);
  GenerateTextComponent(postRef);
  SaveStoreComponent(postRef);
  
  const resetBtn = document.getElementById('reset');
  
  resetBtn.onclick = () => {
    fontFamilyComponent.setDefault();
    fontSizeComponent.setDefault();
    themesComponent.setDefault();
    watermarkComponent.setDefault();
  }
}
