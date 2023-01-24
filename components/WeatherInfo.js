import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.wheaterInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.textSecondary}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wheaterInfo: {
    alignItems: "center",
    // marginTop: 20,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
    marginTop: 10,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 30,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
    textTransform: "capitalize",
  },
});
