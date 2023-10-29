import { FontFamilyComponent } from "./components/FontFamily.component.js";
import { FontSizeComponent } from "./components/FontSize.component.js";
import { ThemesComponent } from "./components/Themes.component.js";
import { WatermarkComponent } from "./components/Watermark.component.js";

function SettingsComponent(formRef, postRef) {
  const fontFamilyComponent = FontFamilyComponent(postRef);
  const fontSizeComponent = FontSizeComponent(postRef);
  const themesComponent = ThemesComponent(postRef);
  const watermarkComponent = WatermarkComponent(formRef);
  
  return {
    fontFamilyComponent,
    fontSizeComponent,
    themesComponent,
    watermarkComponent
  };
}

export default SettingsComponent;
