import React, {ReactNode} from 'react';
import {
  RegisteredStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Row, UIText} from '../../atoms';

const APP_BAR_HEIGHT = 55;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: APP_BAR_HEIGHT,
    marginTop: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    marginLeft: -20,
    marginTop: -20,
  },
  left: {
    minWidth: 72,
    alignItems: 'flex-start',
  },
  right: {
    minWidth: 72,
    alignItems: 'flex-end',
  },
  light: {
    color: 'white',
  },
  black: {
    color: '#000',
  },
});

type Props = {
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
  uppercase?: boolean;
  variant?: 'black' | 'light';
  titleStyle?: StyleProp<TextStyle>;
  style?: ViewStyle;
  numberOfLines?: number | undefined;
};

const AppBar = ({
  title,
  left: leftNode,
  right: rightNode,
  variant = 'black',
  titleStyle,
  style,
  numberOfLines,
}: Props) => {
  const {top, left, right} = useSafeAreaInsets();
  const textTransform = {
    textTransform: 'capitalize',
  } as unknown as RegisteredStyle<TextStyle>;

  const containerDynamicStyle: ViewStyle = {
    paddingTop: top,
    paddingLeft: Math.max(left, 5),
    paddingRight: Math.max(right, 5),
  };

  return (
    <Row center style={[styles.container, containerDynamicStyle, style]}>
      <View style={styles.left}>{leftNode}</View>
      <UIText
        style={[styles.title, textTransform, styles[variant], titleStyle]}
        numberOfLines={numberOfLines}>
        {title}
      </UIText>
      <View style={styles.right}>{rightNode}</View>
    </Row>
  );
};

export default AppBar;
