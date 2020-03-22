import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 30,
    backgroundColor: "#5bf0e8"
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: '#fff',
    fontWeight: 'bold'
  }
});
