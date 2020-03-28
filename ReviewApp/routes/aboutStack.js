import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//My Components
import About from "../screens/about";
import Header from "../shared/header";

//My styles
import { headerOptions } from "../styles/headerOptions";

const AboutStack = createStackNavigator();

export default function AboutNavigator() {
  return (
    <AboutStack.Navigator screenOptions={headerOptions}>
      <AboutStack.Screen
        name="About"
        component={About}
        options={ ({navigation}) => { return { headerTitle: () => <Header title='About' navigation={navigation}/> }}}
      />
    </AboutStack.Navigator>
  );
}
