import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const MoreIcon = (props) => (
  <Svg
    width={50}
    height={51}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <Rect x={1.001} width={48} height={48} rx={20} fill="#22B07D" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.463 14h-3.38c-1.41 0-2.54 1.15-2.54 2.561v3.409c0 1.42 1.13 2.56 2.54 2.56h3.38c1.4 0 2.54-1.14 2.54-2.56v-3.409c0-1.411-1.14-2.561-2.54-2.561Zm-14.92 0h3.38c1.41 0 2.54 1.15 2.54 2.561v3.409c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56v-3.409c0-1.411 1.14-2.561 2.54-2.561Zm0 11.47h3.38c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.14-2.56 2.54-2.56Zm11.54 0h3.38c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56Z"
      fill="#fff"
    />
    <Defs></Defs>
  </Svg>
)

export default MoreIcon;



