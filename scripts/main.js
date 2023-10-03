import SettingsComponent from "./components/settings/SettingsComponent.js";
import { DownloadComponent } from "./components/DownloadComponent.js";
import { GenerateTextComponent } from "./components/GenerateTextComponent.js";
import { SaveStoreComponent } from "./components/SaveStoreComponent.js";

MainComponent();

function MainComponent() {
  const postRef = document.getElementById('post-ref');
  
  SettingsComponent(postRef);
  DownloadComponent(postRef);
  GenerateTextComponent(postRef);
  SaveStoreComponent(postRef);
}



