import { FontFamilyComponent } from "./components/FontFamily.component.js";
import { FontSizeComponent } from "./components/FontSize.component.js";
import { ThemesComponent } from "./components/Themes.component.js";
import { WatermarkComponent } from "./components/Watermark.component.js";

function SettingsComponent(formRef, postRef) {
  FontFamilyComponent(postRef);
  FontSizeComponent(postRef);
  ThemesComponent(postRef);
  WatermarkComponent(formRef);
}

export default SettingsComponent;
