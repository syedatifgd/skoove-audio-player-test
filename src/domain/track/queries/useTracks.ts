import {useQuery} from 'react-query';
import {QueryKey} from '../../../api/helpers';
import trackService from '../track.service';

export default function useTracks() {
  return useQuery([QueryKey.useTracks], () => trackService.fetchTrackList());
}
