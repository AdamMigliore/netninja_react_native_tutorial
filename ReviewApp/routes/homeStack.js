import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//My Components
import Home from "../screens/home";
import Review from "../screens/review";
import Header from "../shared/header";
import { headerOptions } from "../styles/headerOptions";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={headerOptions}   headerMode={'screen'}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={ ({navigation}) => { return { headerTitle: () => <Header title='Reviews App' navigation={navigation}/> }}}
      />
      <HomeStack.Screen name="Review" component={Review} />
    </HomeStack.Navigator>
  );
}
