import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherDetails({ currentWeather, unitSystem }) {
  const {
    main: { feels_like, humidity, pressure, temp_min, temp_max },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <View style={styles.wheaterDetails}>
      <View style={styles.wheaterDetailsRow}>
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color="#ff304f" />
            <View style={styles.wheaterDetailsItems}>
              <Text>Sensação</Text>
              <Text style={styles.wheaterDetailsText}>
                {feels_like}º {unitSystem === "metric" ? "C" : "F"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color="#ff304f" />
            <View style={styles.wheaterDetailsItems}>
              <Text>Umidade</Text>
              <Text style={styles.wheaterDetailsText}>{humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.wheaterDetailsRow,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <FontAwesome5 name={"temperature-low"} size={30} color="#ff304f" />
            <View style={styles.wheaterDetailsItems}>
              <Text>Minima</Text>
              <Text style={styles.wheaterDetailsText}>
                {temp_min}º {unitSystem === "metric" ? "C" : "F"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <FontAwesome5 name={"temperature-high"} size={30} color="#ff304f" />

            <View style={styles.wheaterDetailsItems}>
              <Text>Máxima</Text>
              <Text style={styles.wheaterDetailsText}>
                {temp_max}º {unitSystem === "metric" ? "C" : "F"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.wheaterDetailsRow,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color="#ff304f"
            />
            <View style={styles.wheaterDetailsItems}>
              <Text>Velocidade</Text>
              <Text style={styles.wheaterDetailsText}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.wheaterDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.wheaterDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color="#ff304f"
            />
            <View style={styles.wheaterDetailsItems}>
              <Text>Pressão</Text>
              <Text style={styles.wheaterDetailsText}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wheaterDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  wheaterDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingVertical: 15,
    // paddingHorizontal: 30,
  },
  wheaterDetailsBox: {
    flex: 1,
    padding: 20,
  },
  wheaterDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  wheaterDetailsTitle: {
    fontSize: 16,
    color: PRIMARY_COLOR,
  },
  wheaterDetailsText: {
    fontSize: 16,
    fontWeight: "700",
    color: SECONDARY_COLOR,
  },
});
