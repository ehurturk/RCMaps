import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props) => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1218.524 733.763"
    {...props}
  >
    <Defs></Defs>
    <Path
      className="cls-1"
      d="M.258 726.263h363.93V479.255M7.5 726.242v-73.451M11.5 459.883v-269.05M11.5 374.91h361.495M471.243 374.91h158.128M624.243 172.466l-2.565 202.444M560.992 178.723l63.121-.023M568.684 13.757l-.001 164.963M.258 7.5l229.092.855M407.992 7.5H717.41M819.125 11.774h291.468M827.672 278.454l-.855-260.695M819.125 374.91h399.399M1100.336 148.107V374.91M1018.824 382.733v258.133M1109.738 632.609h-90.914M364.188 726.263h854.336M1210.598 382.733v343.53"
    />
    <Path
      className="cls-3"
      d="M11.5 190.833V14.062M407.992 7.5h-179.03M9.5 652.026V460.883M1100.336 148.107V18.404M819.125 11.774 717.41 7.853"
    />
    <Path
      className="cls-4"
      d="m471.243 374.91-98.248-.001M827.681 278.451l-.428 86.1M1199.381 632.609l-89.643-.001M364.188 382.421v96.834"
    />
  </Svg>
)

export default SvgComponent
