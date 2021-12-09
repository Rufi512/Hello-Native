import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowLeftCircle = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M15 3.438C8.615 3.438 3.438 8.614 3.438 15c0 6.385 5.177 11.563 11.562 11.563S26.563 21.385 26.563 15c0-6.386-5.178-11.562-11.563-11.562Z"
      stroke="#9494AD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.803 10.661 12.446 15l4.357 4.339"
      stroke="#9494AD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowLeftCircle
