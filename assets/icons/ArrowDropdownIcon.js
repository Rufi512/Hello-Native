import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowDropdownIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m19 8.5-7 7-7-7"
      stroke="#525298"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowDropdownIcon
