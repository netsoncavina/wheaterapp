import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View>
      <Picker
        style={styles.picker}
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    position: "absolute",
    top: 20,
    left: 20,
    height: 70,
    width: 100,
  },
});
