import { StyleSheet } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={tw`flex-1`}
      initialRegion={{
        latitude: 59.41431,
        longitude: 24.64201,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
