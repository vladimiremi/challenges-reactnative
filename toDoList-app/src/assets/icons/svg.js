import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const IconPlus = props => (
  <Svg
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#F2F2F2">
      <Path d="M7.984 1.452a6.532 6.532 0 1 1-6.532 6.532 6.557 6.557 0 0 1 6.532-6.532Zm0-1.452a7.984 7.984 0 1 0 .065 15.967A7.984 7.984 0 0 0 7.984 0Z" />
      <Path d="M11.707 7.381H8.495V4.17H7.414V7.38H4.199v1.082h3.215v3.211h1.081V8.463h3.212V7.38Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const IconTrash = props => (
  <Svg
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.202 4.985h-1.33v5.522h1.33V4.985ZM5.462 4.985h-1.33v5.522h1.33V4.985Z"
      fill="gray"
    />
    <Path
      d="M12.478 2.167a.644.644 0 0 0-.46-.605.62.62 0 0 0-.184-.045H8.287a2.144 2.144 0 0 0-4.1 0H.638a.641.641 0 0 0-.172.027H.452a.641.641 0 0 0 .09 1.246l.711 9.743A1.512 1.512 0 0 0 2.683 14h7.104a1.512 1.512 0 0 0 1.433-1.467l.708-9.734a.638.638 0 0 0 .55-.632Zm-6.241-.952a.937.937 0 0 1 .689.302H5.547a.932.932 0 0 1 .69-.302Zm3.55 11.575H2.683c-.081 0-.208-.133-.223-.344L1.758 2.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344Z"
      fill="gray"
    />
  </Svg>
);
export const IconDone = props => (
  <Svg
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.43.342 4.1 4.674 1.616 2.192l-.836.835L4.1 6.346l5.168-5.168L8.43.342Z"
      fill="#F2F2F2"
    />
  </Svg>
);
