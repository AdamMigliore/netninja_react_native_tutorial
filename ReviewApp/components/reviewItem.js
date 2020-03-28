import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyle } from "../styles/global";
import Card from "../shared/card";

export default function ReviewItem({ item, pressHandler }) {
  return (
    <Card>
      <TouchableOpacity
        onPress={() => {
          pressHandler(item);
        }}
      >
        <Text style={globalStyle.titleText}>{item.title}</Text>
        <Text style={globalStyle.body}>{item.body}</Text>
      </TouchableOpacity>
    </Card>
  );
}
