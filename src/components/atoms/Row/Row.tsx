import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  center?: boolean;
};

const Row = ({ style, center, ...props }: Props) => {
  const rowStyle: ViewStyle = {
    ...(center && { alignItems: 'center' }),
  };
  return <View style={[styles.container, rowStyle, style]} {...props} />;
};

export default Row;
