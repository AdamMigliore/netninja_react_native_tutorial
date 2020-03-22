import React from "react";
import { StyleSheet, TextInput} from "react-native";

export default function Form( {onSubmitHandler}){

    return (
        <TextInput
        style = {styles.input}
        placeholder = "What is there to do..."
        onSubmitEditing = { ( {nativeEvent})=> {
            onSubmitHandler(nativeEvent.text)
        }}
        />
    );
}

const styles = StyleSheet.create({
    input:{
        padding: 5,
        fontSize: 16,
        borderBottomWidth: 3,
        borderBottomColor: "#5bf0e8"
    }
})