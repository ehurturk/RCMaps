import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { firebase, EventsDB } from "../firebase/config";

export default function Map(props) {
  const [mapRef, setMapRef] = useState();
  const initialMapRegion = {
    latitude: props.lat,
    longitude: props.long,
    latitudeDelta: 0,
    longitudeDelta: 0.05,
  };

  const [events, setEvents] = useState([]);
    
  useEffect(() => {
    const today = new Date();
    EventsDB.where("date", ">=", today).onSnapshot((querySnapShot) => {
      let n_events = [];
      querySnapShot.forEach((doc) => {
        n_events.push(doc.data())
      })
      setEvents(n_events);
    })
  });

  const setBoundingRegion = async () => {
    if (props.ne_lat === undefined || props.ne_long === undefined || props.sw_lat === undefined || props.sw_long === undefined) {
      return;
    }

    mapRef.setMapBoundaries(
      {
        latitude: props.ne_lat,
        longitude: props.ne_long,
      },
      {
        latitude: props.sw_lat,
        longitude: props.sw_long,
      }
    );

  };

  return (
    <MapView
      style={styles.map}
      ref={(ref) => setMapRef(ref)}
      initialRegion={initialMapRegion}
      minZoomLevel={16}
      maxZoomLevel={20}
      onPress={() => setBoundingRegion()}
      onMapReady={() => setBoundingRegion()}
      scrollEnabled={true}
      rotateEnabled={false}
      pitchEnabled={false}
      mapType={"satellite"}
      provider={PROVIDER_GOOGLE}
    >
      {events.map((mapData) => { return <MapView.Marker cordinate={{ latitude: mapData.latitude, longitude: mapData.longitude }} title={mapData.title} description={mapData.description} /> })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});

// export default Map;
