import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

//My components
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import Form from "./components/form";

export default function App() {
  const[nextTodoKey, setNextTodoKey] = useState(4);

  const [todos, setTodos] = useState([
    { text: "Finish Header", key: "1" },
    { text: "Finish TodoItem", key: "2" },
    { text: "Finish Form", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {return todo.key != key});
    });
  };

  const onSubmitHandler = text => {
    setTodos(prevTodos => {
      return [...prevTodos, { text, key: nextTodoKey.toString() }];
    });
    setNextTodoKey( (nextTodoKey+1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.body}>
        <Form onSubmitHandler={onSubmitHandler} />
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
  );
}

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
    marginTop: 20,
    marginBottom: 20
  },
  footer: {
    flex: 1,
    backgroundColor: "#5bf0e8"
  }
});
