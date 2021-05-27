import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { UrlTile } from "react-native-maps";
// import MapView from "react-native-maps";
// import BingMapsReact from "bingmaps-react";

// MapboxGL.setAccessToken();

const BINGS_MAP_API_KEY = "Asow_XCXo-cwowXbUeZzqp2NIL-f-zzLR5sSj_jAwxlnzFiioeoYPmfTNBgHAVlW"

export default function Landing() {

    const [_latitude, _longitude] = [41.06714682400212, 29.034866256006463];

    // const handleMapAPI = (latitude, longtitude) => {
    //     let responseURL = "";
    //     fetch(`https://dev.virtualearth.net/REST/V1/Imagery/Metadata/Aerial/${latitude},${longtitude}?zl=15&key=${BINGS_MAP_API_KEY}`)
    //         .then(result => result.json())
    //         .then(data => responseURL = data["resourceSets"]["0"]["resources"][0]["imageUrl"])
    //         .catch((e) => alert(e));
    //     console.log(responseURL);
    //     return responseURL;
    // }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: _latitude,
                    longitude: _longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0.05,

                }}

                // minZoomLevel={17}
                maxZoomLevel={20}
                // scrollEnabled={false}
                mapType={"satellite"}
            // provider={"none"}
            />


            {/* <BingMapsReact
                bingMapsKey={BINGS_MAP_API_KEY}
                viewOptions={
                    {
                        center: { latitude: _latitude, longitude: _longitude },
                        mapTypeId: "birdseye"
                    }
                }

            /> */}

            {/* 
            <UrlTile
                // urlTemplate={handleMapAPI(_latitude, _longtitude)}
                // urlTemplate="http://ecn.t2.tiles.virtualearth.net/tiles/a120323223230212.jpeg?g=10307"
                urlTemplate="https://dev.virtualearth.net/REST/v1/Imagery/Metadata/{imagerySet}?key={BingMapsAPIKey}"
            /> */}

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