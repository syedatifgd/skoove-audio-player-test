import { SvgProps } from 'react-native-svg';

export type IconProps = {
  style?: SvgProps['style'];
  size?: number;
  color?: string;
  secondColor?: string;
  strokeWidth?: number;
  focused?: boolean;
  stroke?: string;
  opacity?: number;
};
