import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

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
      <Text>{temp}</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wheaterInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
});
