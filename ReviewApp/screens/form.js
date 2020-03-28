import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
import { globalStyle } from "../styles/global";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(1),
  body: yup
    .string()
    .required()
    .min(1),
  rating: yup
    .string()
    .required()
    .test(
      "is-between-1-5",
      "Enter a rating between 1 and 5",
      rating => parseInt(rating) <= 5 && parseInt(rating) >= 1
    )
    .test(
      "is-integer",
      "Enter an integer rating between 1 and 5",
      rating => parseFloat(rating) % 1 == 0
    )
});

export default function Form({ addReviewHandler }) {
  return (
    <View style={globalStyle.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={addReviewHandler}
        validationSchema={reviewSchema}
      >
        {formikProps => (
          <View>
            <TextInput
              style={globalStyle.input}
              placeholder="Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyle.error}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              style={globalStyle.input}
              placeholder="Rating"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={{ ...globalStyle.error, marginBottom: 10 }}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <TextInput
              textAlignVertical="top"
              multiline
              minHeight={100}
              maxHeight={100}
              style={globalStyle.input}
              placeholder="Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyle.error}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <Button
              color="#a5ade8"
              title="Submit"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
