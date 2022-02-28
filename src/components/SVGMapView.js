import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {SvgUri}  from "react-native-svg";


export default function SVGMapView() {
  return (
	  <View>


			<SvgUri
					width="100%"
					height="100%"
					uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
				/>

	</View>
  )
}