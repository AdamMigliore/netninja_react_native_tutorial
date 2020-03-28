import React from "react";
import { View, Text, Image, Button } from "react-native";
import { globalStyle } from "../styles/global";
import { images } from "../styles/ratingsImages";
import Card from "../shared/card";

export default function Review({ route }) {
  const review = route.params;

  return (
    <View style={globalStyle.container}>
      <Card>
        <Text style={globalStyle.titleText}> {review.title}</Text>
        <Text style={globalStyle.body}> {review.body}</Text>
        <View style={globalStyle.rating}>
          <Image source={images.ratings[review.rating]} />
        </View>
        <Button title="Delete" color="red"/>
      </Card>
    </View>
  );
}
