import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './helpers';

export default function BackIcon({
  color = 'black',
  size = 24,
  ...props
}: IconProps) {
  return (
    <Svg height={size} viewBox="0 0 24 24" width={size} fill="none" {...props}>
      <Path
        d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
