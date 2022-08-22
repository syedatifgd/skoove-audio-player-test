import {Track} from 'react-native-track-player';
import {Query, useQuery} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryKey} from '../../../api/helpers';

export default function useRating(track: Track) {
  return useQuery([QueryKey.useRating, track], () =>
    AsyncStorage.getItem(track?.title).then(data => {
      return JSON.parse(data);
    }),
  );
}
