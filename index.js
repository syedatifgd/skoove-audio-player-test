/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import {name as appName} from './app.json';
import {PlaybackService} from './src/services';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
