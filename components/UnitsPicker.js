import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker() {
  return (
    <View>
      <Picker style={styles.picker}>
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    position: "absolute",
    top: 200,
    left: 10,
    height: 50,
    width: 100,
  },
});
