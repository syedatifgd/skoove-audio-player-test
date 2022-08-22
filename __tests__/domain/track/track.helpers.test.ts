import toTrackPlayer from '../../../src/domain/track/transform/toTrackPlayer';

const TrackPlayer = {
  title: 'Oceansound',
  url: 'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/react%20native/simple%20audio%20player/data/Oceansound.mp3',
  artwork:
    'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/react%20native/simple%20audio%20player/data/Oceansound.png',
  duration: 14448,
};

const Track = {
  title: 'Oceansound',
  audio:
    'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/react%20native/simple%20audio%20player/data/Oceansound.mp3',
  cover:
    'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/react%20native/simple%20audio%20player/data/Oceansound.png',
  totalDurationMs: 14448,
};

describe('TrackHelpers', () => {
  it('should return the rating of a track if exists', () => {
    const result = toTrackPlayer([Track]);
    expect(result[0]).toMatchObject(TrackPlayer);
  });
});
