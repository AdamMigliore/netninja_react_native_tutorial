import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function Form({ onSubmitHandler, responseMessage }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="What is there to do..."
        onSubmitEditing={({ nativeEvent }) => {
          onSubmitHandler(nativeEvent.text);
        }}
      />
      <Text style={styles.responseMessage}>{responseMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 3,
    borderBottomColor: "#5bf0e8"
  },
  responseMessage: {
    fontSize: 12,
    color: "#000"
  }
});
