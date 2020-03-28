import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titleText: {
    fontSize: 24,
    fontFamily: "heebo-black"
  },
  body: {
    fontSize: 16,
    fontFamily: "heebo-regular"
  },
  rating: {
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#a5ade8",
    borderBottomWidth: 3,
    padding: 5,
  }, error: {
    color: 'red',
    fontSize: 10,
    fontFamily: 'heebo-regular',
  }
});
