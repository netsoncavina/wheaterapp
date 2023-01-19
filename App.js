import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";
import { colors } from "./utils/index";

const WEATHER_API_KEY = "591ed98225dfbeadd70c189a6eb67766";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");
  useEffect(() => {
    load();
  }, [unitSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&lang=pt_br&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);
      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
      <ReloadIcon load={load} />
      <View style={styles.main}>
        {currentWeather ? (
          <WeatherInfo currentWeather={currentWeather} />
        ) : (
          <View>
            {errorMessage ? (
              <>
                <Text>{errorMessage}</Text>
                <Text>Unable to get weather data</Text>
              </>
            ) : (
              <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
            )}
          </View>
        )}
      </View>
      {currentWeather ? (
        <WeatherDetails
          currentWeather={currentWeather}
          unitSystem={unitSystem}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
