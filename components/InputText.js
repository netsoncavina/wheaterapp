import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputText() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Insira localização" />
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
