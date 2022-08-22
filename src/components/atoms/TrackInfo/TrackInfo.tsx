import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Track, usePlaybackState} from 'react-native-track-player';
import {useOnTogglePlayback} from '../../../hooks';
import UIButton from '../UIButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  artwork: {
    width: 350,
    height: 350,
    backgroundColor: 'grey',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 30,
  },
});

export interface TrackInfoProps {
  track?: Track;
}

const TrackInfo = ({track}: TrackInfoProps) => {
  const state = usePlaybackState();

  const onTogglePlayback = useOnTogglePlayback();
  return (
    <UIButton
      onPress={onTogglePlayback}
      variant="clearText"
      style={styles.container}>
      <Image style={styles.artwork} source={{uri: `${track?.artwork}`}} />
    </UIButton>
  );
};

export default TrackInfo;
