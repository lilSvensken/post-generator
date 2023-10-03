import { FontFamilyComponent } from "./components/FontFamilyComponent.js";
import { FontSizeComponent } from "./components/FontSizeComponent.js";

function SettingsComponent(postRef) {
  FontFamilyComponent(postRef);
  FontSizeComponent(postRef);
}

export default SettingsComponent;
