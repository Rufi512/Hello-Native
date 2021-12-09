import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowIcon = (props) => (
  <Svg
    width={20}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.692 7.55h16.56M8.37 14.202l-6.678-6.65L8.37.9"
      stroke="#200E32"
      strokeWidth={1.656}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowIcon
