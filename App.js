import React, { useState } from "react";
import { Text, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpg"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png",
    ];
    const fonts = [Ionicons.font];
    const imagePromises = cacheImages(images);
    const fontPromises = cacheFonts(fonts);
    return Promise.all([...imagePromises, ...fontPromises]);
  };
  return isReady ? (
    <Text>Ready</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={console.error}
      onFinish={handleFinish}
    />
  );
}
