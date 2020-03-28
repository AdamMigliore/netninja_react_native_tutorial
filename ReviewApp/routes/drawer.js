import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//My Components
import AboutNavigator from "./aboutStack";
import HomeNavigator from "./homeStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
