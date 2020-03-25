import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Feather name="delete" size={16} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    borderColor: "#5bf0e8",
    borderWidth: 3,
    borderStyle: "dashed",
    borderRadius: 10
  },
  itemText: {
    flex:9,
    fontSize: 16
  }
});
