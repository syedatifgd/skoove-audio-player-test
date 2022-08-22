import React from 'react';

import BackIcon from './BackIcon';
import {IconProps} from './helpers';
import StarIcon from './StarIcon';
import StarIconFilled from './StarIconFilled';
export type IconName = keyof typeof iconmap;

const iconmap = {
  back: BackIcon,
  star: StarIcon,
  'star-filled': StarIconFilled,
} as const;

interface Props extends IconProps {
  name: IconName;
  opacity?: number;
}

const UIIcon = ({name, color = '#181725', opacity = 1, ...props}: Props) => {
  const IconComponent = iconmap[name];
  if (!IconComponent) {
    console.warn(`IconName not found: "${name}"`);
    return null;
  }

  return <IconComponent color={color} opacity={opacity} {...props} />;
};

export default UIIcon;
