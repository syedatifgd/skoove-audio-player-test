import {apiClient} from '../../api';

import {Track} from './track.model';

class TrackService {
  async fetchTrackList() {
    return await apiClient.get<Track[]>('/tracks');
  }
}

export default new TrackService();
