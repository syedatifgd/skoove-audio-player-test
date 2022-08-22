import React from 'react';
import {StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import UIText from '../UIText';
import Row from '../Row';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 350,
    marginTop: 25,
    flexDirection: 'row',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  labelText: {
    color: 'black',
    fontSize: 20,
  },
});

const Progress = () => {
  const progress = useProgress();
  return (
    <>
      <Slider
        style={styles.container}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        thumbTintColor="black"
        minimumTrackTintColor="black"
        maximumTrackTintColor="#FFFFFF"
        onSlidingComplete={value => {
          TrackPlayer.seekTo(value);
        }}
      />
      <Row center>
        <UIText style={styles.labelText}>
          {new Date(progress.position * 1000).toISOString().slice(14, 19)}
        </UIText>
        <UIText style={styles.labelText}>{' / '}</UIText>
        <UIText style={styles.labelText}>
          {new Date(progress.duration * 1000).toISOString().slice(14, 19)}
        </UIText>
      </Row>
    </>
  );
};

export default Progress;
