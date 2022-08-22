import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import AppStatusBar from '../../AppStatusBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export interface PageProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const Page = ({style, children}: PageProps) => {
  return (
    <View style={[styles.container, style]}>
      <AppStatusBar />
      {children}
    </View>
  );
};

export default Page;
