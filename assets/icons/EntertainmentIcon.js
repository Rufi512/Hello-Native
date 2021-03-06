import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const EntertainmentIcon = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect opacity={0.1} width={40} height={40} rx={15} fill="#B548C6" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.636 15.069.79.01c2.838 0 4.907 2.023 4.907 4.817v3.588c0 2.794-2.069 4.817-4.907 4.817-1.136.024-2.273.032-3.418.032s-2.298-.008-3.435-.032c-2.838 0-4.907-2.023-4.907-4.817v-3.588c0-2.794 2.07-4.817 4.915-4.817 1.072-.016 2.168-.032 3.28-.032v-.137c0-.554-.466-1.003-1.023-1.003h-.81c-.923 0-1.676-.739-1.676-1.638 0-.33.278-.602.614-.602.343 0 .613.273.613.602 0 .24.204.433.45.433h.81c1.234.008 2.24.996 2.248 2.2v.153c.516 0 1.032.007 1.55.014Zm-3.593 7.22h-.859v.85c0 .33-.278.602-.613.602a.607.607 0 0 1-.613-.602v-.85h-.867a.607.607 0 0 1-.614-.603c0-.33.279-.602.614-.602h.867v-.843c0-.33.27-.602.613-.602.335 0 .613.273.613.602v.843h.86c.334 0 .613.273.613.602a.607.607 0 0 1-.614.602Zm3.476-1.358h.082a.607.607 0 0 0 .613-.602.612.612 0 0 0-.613-.602h-.082a.602.602 0 1 0 0 1.204Zm1.398 2.762H24a.607.607 0 0 0 .613-.602.612.612 0 0 0-.613-.602h-.082a.601.601 0 1 0 0 1.204Z"
      fill="#B548C6"
    />
  </Svg>
)

export default EntertainmentIcon