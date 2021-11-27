import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { UrlTile } from "react-native-maps";
import Map from "../components/Map";


export default function Landing() {

  const [_latitude, _longitude] = [41.067618, 29.034914];
  const [ne_lat, ne_long] = [41.068746, 29.037911
  ];
  const [sw_lat, sw_long] = [41.066190, 29.034390
  ];
  return (
    <View style={styles.container}>
      <Map lat={_latitude} long={_longitude} ne_lat={ne_lat} ne_long={ne_long} sw_lat={sw_lat} sw_long={sw_long} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,

  },
});
