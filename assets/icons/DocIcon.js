import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const DocIcon = (props) => (
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
      d="M15.207 11.333h5.587c2.06 0 3.206 1.187 3.206 3.22v6.887c0 2.067-1.146 3.227-3.206 3.227h-5.587c-2.027 0-3.207-1.16-3.207-3.227v-6.887c0-2.033 1.18-3.22 3.207-3.22Zm.18 3.107v-.007h1.993a.522.522 0 0 1 0 1.047h-1.993a.52.52 0 0 1 0-1.04Zm0 4.053h5.227a.52.52 0 0 0 0-1.04h-5.227a.52.52 0 0 0 0 1.04Zm0 3.047h5.227a.522.522 0 0 0 .466-.52c0-.273-.2-.5-.466-.527h-5.227a.53.53 0 0 0-.5.807c.107.167.3.267.5.24Z"
      fill="#fff"
    />
  </Svg>
)

export default DocIcon
