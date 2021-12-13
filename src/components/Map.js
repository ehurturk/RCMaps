import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { firebase, EventsDB } from "../firebase/config";

/*
  EVENT DB DESIGN
  event = {
    string loc = {"WO103"/"SK202"} (Parse the loc value based on first 2 chars and remaining chars)
    string description = {"Mamma Mia movie night"}
    timestamp date = {TIMESTAMP OBJECT} // to convert to JS Date() use .toDate();
    string title = {"Movie night"}
  }

  LOST&FOUND DB DESIGN
  lost_item = {
    string loc = {"WO103"/"SK202"} (Parse the loc value based on first 2 chars and remaining chars):
      - if time exceeds 20.00 at max, then change the loc to lise office.
      - 
    string description = {"Mamma Mia movie night"}
    timestamp date = {TIMESTAMP OBJECT} // to convert to JS Date() use .toDate();
    int type = {ELECTRONICS=0, CLOTHING=1, SCHOOL_ITEM=2, MISC=3, } // preferably enum
    string title = {"Movie night"}
    int state = {FOUND=0, LO=1, LF=2, MI=3 } // MI is default
  }


  ADMIN/STUDENT LOGIN:
  - Admin can write & read
  - Student can read
  - All students have .NUMBER in their username.
*/

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
    EventsDB.onSnapshot((querySnapShot) => {
      let n_events = [];
      querySnapShot.forEach((doc) => {
        n_events.push(doc.data());
      });
      setEvents(n_events);
    });
  }, [events]);

  const setBoundingRegion = async () => {
    if (
      props.ne_lat === undefined ||
      props.ne_long === undefined ||
      props.sw_lat === undefined ||
      props.sw_long === undefined
    ) {
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
      {events.map((mapData) => {
        return (
          <MapView.Marker
            key={mapData.title}
            coordinate={{
              latitude: parseFloat(mapData.latitude),
              longitude: parseFloat(mapData.longitude),
            }}
            title={mapData.title}
            description={mapData.description}
          />
        );
      })}
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
  },
});
