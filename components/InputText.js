import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function InputText({ setLatitude, setLongitude, onSubmit }) {
  const [text, onTextChange] = useState("");

  async function getCoordinates() {
    const searchUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${text}&appid=591ed98225dfbeadd70c189a6eb67766`;
    const response = await fetch(searchUrl);
    const result = await response.json();
    setLatitude(result[0].lat);
    setLongitude(result[0].lon);
    onSubmit();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Insira localização"
        onSubmitEditing={() => getCoordinates()}
        onChangeText={(text) => onTextChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});
