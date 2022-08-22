import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

import {IconProps} from './helpers';

export default function StarIconFilled({
  color,
  size = 24,
  ...props
}: IconProps) {
  return (
    <Svg height={size} viewBox="0 0 24 24" width={size} fill={color} {...props}>
      <G>
        <Path d="M0,0h24v24H0V0z" fill="none" />
        <Path d="M0,0h24v24H0V0z" fill="none" />
      </G>
      <G>
        <Path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z" />
      </G>
    </Svg>
  );
}
