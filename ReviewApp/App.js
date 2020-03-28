import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

//My components
import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "heebo-black": require("./assets/fonts/Heebo/Heebo-Black.ttf"),
    "heebo-regular": require("./assets/fonts/Heebo/Heebo-Regular.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Navigator/>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
