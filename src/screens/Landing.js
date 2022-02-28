import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GoogleMapView from "../components/GoogleMapView";
import SVGMapView from '../components/SVGMapView';
import {SvgUri}  from "react-native-svg";

export default function Landing() {

  const [_latitude, _longitude] = [41.067618, 29.034914];
  const [ne_lat, ne_long] = [41.068746, 29.037911
  ];
  const [sw_lat, sw_long] = [41.066190, 29.034390
  ];
  return (
    <View style={styles.container}>
      {/* <GoogleMapView lat={_latitude} long={_longitude} ne_lat={ne_lat} ne_long={ne_long} sw_lat={sw_lat} sw_long={sw_long} /> */}
      {/* <SVGMapView /> for some reason this shit doesnt work. */}
      <SvgUri
					width="100%"
					height="100%"
					uri="../components/katplani.svg"
				/>
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
