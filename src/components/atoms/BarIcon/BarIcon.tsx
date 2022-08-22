import React from 'react';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import UIButton from '../UIButton';
import {ButtonSize} from '../UIButton/UIButton';
import UIIcon, {IconName} from '../UIIcon/UIIcon';

const styles = StyleSheet.create({
  inner: {
    minWidth: 'auto',
    minHeight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;
  size?: keyof typeof ButtonSize;
  containerStyle?: StyleProp<ViewStyle>;
  labelTxtStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconName: IconName;
  iconSize?: number;
  iconColor?: string;
  disabled?: boolean;
  transparent?: boolean;
};

const BarIcon = ({
  style,
  size = 'md',
  containerStyle,
  iconName,
  iconSize,
  onPress,
  iconColor = '#181725',
  disabled,
  transparent,
  labelTxtStyle,
}: Props) => {
  const btnSize = ButtonSize[size];
  return (
    <UIButton
      containerStyle={containerStyle}
      style={[
        styles.inner,
        transparent && styles.transparent,
        {height: btnSize, width: btnSize},
        style,
      ]}
      labelTxtStyle={labelTxtStyle}
      size={size}
      disabled={disabled}
      variant="secondary"
      onPress={onPress}>
      <UIIcon name={iconName} size={iconSize} color={iconColor} />
    </UIButton>
  );
};

export default BarIcon;
