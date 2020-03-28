import React, { useState } from "react";
import { globalStyle } from "../styles/global.js";
import {
  View,
  FlatList,
  Modal,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//My Components
import ReviewItem from "../components/reviewItem";
import Form from "./form";

export default function Home({ navigation }) {
  const [modalState, setModalState] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [key, setKey] = useState(1);

  const pressHandler = item => {
    navigation.navigate("Review", item);
  };

  const addReviewHandler = review => {
    review.key = key.toString();
    setKey(key + 1);
    setReviews(currentReviews => [review, ...currentReviews]);
    setModalState(false);
  };

  const deleteReviewHandler = key => {
    setReviews(currentReviews => currentReviews.filter( (item)=>item.key!=key));
    navigation.goBack();
  };

  return (
    <View style={globalStyle.container}>

      <Modal visible={modalState} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <MaterialIcons
              name="close"
              size={30}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalState(false)}
            />
            <Form addReviewHandler={addReviewHandler} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={30}
        style={styles.modalToggle}
        onPress={() => setModalState(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
    color: "#2b2c2e"
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 10
  },
  modalContainer: {
    flex: 1
  }
});
