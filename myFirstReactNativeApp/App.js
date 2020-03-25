//External libraries imports
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text
} from "react-native";

//My components
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import Form from "./components/form";

//Component
export default function App() {
  const [nextTodoKey, setNextTodoKey] = useState(4);

  const [todos, setTodos] = useState([]);

  const [responseMessage, setResponseMessage] = useState(
    "Click on a Todo to delete, or enter a Todo to add."
  );
  
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.key != key;
      });
    });
    setResponseMessage("Successfully removed todo!");
  };

  const onSubmitHandler = text => {
    setTodos(prevTodos => {
      return [...prevTodos, { text, key: nextTodoKey.toString() }];
    });
    setNextTodoKey(nextTodoKey + 1);
    setResponseMessage("Successfully added todo!");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.body}>
          <Form style={styles.form} onSubmitHandler={onSubmitHandler} responseMessage={responseMessage}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        <View style={styles.footer}>{/*Footer*/}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flex: 1
  },
  body: {
    flex: 8,
    padding: 40
  },
  list: {
    flex:1,
    padding: 10,
    marginTop: 20,
    backgroundColor: "#def5da",
    borderRadius: 10
  },
  footer: {
    flex: 1,
    backgroundColor: "#5bf0e8"
  }
});
