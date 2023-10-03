import { FontFamilyComponent } from "./components/FontFamilyComponent.js";
import { FontSizeComponent } from "./components/FontSizeComponent.js";
import { ThemesComponent } from "./components/ThemesComponent.js";

function SettingsComponent(postRef) {
  FontFamilyComponent(postRef);
  FontSizeComponent(postRef);
  ThemesComponent(postRef);
}

export default SettingsComponent;
