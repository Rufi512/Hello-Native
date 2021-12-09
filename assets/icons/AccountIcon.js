import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const AccountIcon = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={36} height={36} rx={13} fill="#FFBF47" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.444 14.403a3.185 3.185 0 0 1-3.197 3.196 3.185 3.185 0 0 1-3.197-3.196 3.185 3.185 0 0 1 3.197-3.195 3.184 3.184 0 0 1 3.197 3.195Zm-3.197 8.882c-2.62 0-4.831-.426-4.831-2.068 0-1.643 2.226-2.054 4.83-2.054 2.62 0 4.832.426 4.832 2.068 0 1.643-2.226 2.054-4.831 2.054Z"
      fill="#fff"
    />
  </Svg>
)

export default AccountIcon