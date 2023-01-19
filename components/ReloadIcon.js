import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ReloadIcon({ load }) {
  return (
    <View>
      <Ionicons
        style={styles.reloadIcon}
        name="reload"
        size={24}
        color="black"
        onPress={load}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
