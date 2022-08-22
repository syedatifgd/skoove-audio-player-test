import React from 'react';
import {ReactNode} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import UIText from '../UIText';

const variantColors = {
  primary: {
    backgroundColor: '#83A2BE',
    borderColor: '#83A2BE',
    labelColor: '#ffffff',
  },
  secondary: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    labelColor: '#181725',
  },
  tertiary: {
    backgroundColor: '#F4F6F9',
    borderColor: '#F4F6F9',
    labelColor: '#83A2BE',
  },
  surface: {
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    labelColor: 'black',
  },
  dark: {
    backgroundColor: '#111111',
    labelColor: 'white',
    borderColor: 'transparent',
  },
  clearText: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    labelColor: '#181725',
  },
  danger: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    labelColor: '#D23939',
  },
  disabled: {
    backgroundColor: '#cccccc',
    borderColor: 'transparent',
    labelColor: '#999999',
  },
  outline: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#181725',
    labelColor: '#181725',
  },
  textPrimary: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    labelColor: '#83A2BE',
  },
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inner: {
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {},
  label: {
    marginVertical: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  fill: {flex: 1},
  rightText: {
    position: 'absolute',
    right: 17,
  },
});

export type ButtonVariant = keyof typeof variantColors;
export const ButtonSize = {
  lg: 60,
  md: 55,
  sm: 50,
};

type Props = {
  label?: ReactNode;
  children?: ReactNode | (() => void) | void;
  size?: keyof typeof ButtonSize;
  variant?: ButtonVariant;
  disabledVariant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  rightText?: string;
  loading?: boolean;
  labelTxtStyle?: StyleProp<TextStyle>;
};

const UIButton = ({
  variant = 'primary',
  label,
  onPress,
  children,
  size = 'md',
  containerStyle,
  disabled,
  labelTxtStyle,
  disabledVariant,
}: Props) => {
  if (disabled) {
    variant = disabledVariant || 'disabled';
  }

  const {labelColor, ...variantStyle} = variantColors[variant];
  const minHeight = ButtonSize[size];
  const labelStyle: TextStyle = {
    color: labelColor,
    fontSize: 16,
  };

  const containerStyles = [
    styles.container,
    containerStyle,
    {...variantStyle, minHeight, minWidth: minHeight * 2},
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
      disabled={disabled}>
      <>
        {!!label && (
          <UIText
            variant="button"
            style={[styles.label, labelStyle, labelTxtStyle]}>
            {label}
          </UIText>
        )}
        {children}
      </>
    </TouchableOpacity>
  );
};

export default UIButton;
