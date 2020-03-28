import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        style={styles.icon}
        size={24}
        onPress={openDrawer}
      />
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  headerTitle: {
    fontFamily: "heebo-black",
    fontSize: 24,
    color: "#383f42",
    letterSpacing: 1,
  },
  icon: {

  }
});
