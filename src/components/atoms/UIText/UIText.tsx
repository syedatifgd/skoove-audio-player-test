import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontSize: 14,
    color: '#000',
  },
  button: {
    fontSize: 16,
    lineHeight: 20,
  },
  header: {
    fontSize: 18,
  },
  'page.header': {
    fontSize: 22,
  },
  'page.header.max': {
    fontSize: 24,
  },
});

export const getUITextStyle = ({
  variant,
  inherit,
  style,
}: UITextSpecificProps) => {
  return [!inherit && styles.body, !!variant && styles[variant], style];
};

interface UITextSpecificProps {
  variant?: keyof typeof styles;
  children?: ReactNode;
  inherit?: boolean;
  style?: StyleProp<TextStyle>;
}

export type UITextProps = UITextSpecificProps & TextProps;

const UIText = ({
  style,
  variant,
  weight,
  color,
  inherit,
  ...props
}: UITextProps) => {
  const textStyle = getUITextStyle({style, variant, inherit});

  return <Text allowFontScaling={false} style={textStyle} {...props} />;
};

export default UIText;
