import React from "react";
import { View, Text } from "react-native";
import { globalStyle } from "../styles/global";

export default function About() {
  const about_Paragraph =
    "This is an app developed by Adam Di Re with the help of NetNinja's tutorial.";

  return (
      <View style={globalStyle.container}>
        <Text style={globalStyle.body}>{about_Paragraph}</Text>
      </View>
  );
}
