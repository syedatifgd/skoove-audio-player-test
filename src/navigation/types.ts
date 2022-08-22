import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Track} from 'react-native-track-player';

export type RootStackParamList = {
  Home: undefined;
  Player: {
    track?: Track;
  };
};

export type AppScreen<Route extends keyof RootStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList, Route>,
    NativeStackNavigationProp<RootStackParamList>
  >;

export type RoutePropApp<Route extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Route
>;
