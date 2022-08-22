import {Track} from 'react-native-track-player';
import {Track as TrackFromBE} from '../track.model';

const toTrackPlayer = (tracks: TrackFromBE[]): Track[] => {
  return tracks?.map(track => {
    return {
      url: track.audio,
      title: track.title,
      artwork: track.cover,
      duration: track.totalDurationMs,
    };
  });
};
export default toTrackPlayer;
