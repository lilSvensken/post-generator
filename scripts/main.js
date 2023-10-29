import SettingsComponent from "./components/settings/Settings.component.js";
import { DownloadComponent } from "./components/Download.component.js";
import { GenerateTextComponent } from "./components/GenerateText.component.js";
import { SaveStoreComponent } from "./components/SaveStore.component.js";
import { ResetComponent } from "./components/Reset.component.js";

MainComponent();

function MainComponent() {
  const formRef = document.getElementById('form-ref');
  const postRef = document.getElementById('post-ref');
  
  const { fontFamilyComponent, fontSizeComponent, themesComponent, watermarkComponent } =
    SettingsComponent(formRef, postRef);
  DownloadComponent(postRef);
  GenerateTextComponent(postRef);
  SaveStoreComponent(postRef);
  ResetComponent(postRef);
  
  const resetBtn = document.getElementById('reset');
  
  resetBtn.onclick = () => {
    fontFamilyComponent.setDefault();
    fontSizeComponent.setDefault();
    themesComponent.setDefault();
    watermarkComponent.setDefault();
  }
}
