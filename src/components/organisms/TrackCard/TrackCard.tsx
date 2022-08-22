import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Track} from 'react-native-track-player';
import {Row, UIText} from '../../atoms';
import UIButton from '../../atoms/UIButton';
import Rating from '../../molecules/Rating';

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 0,
  },
  cover: {width: '100%', height: '100%'},
  bottomContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTrackTitle: {fontSize: 20, fontWeight: '500'},
  rating: {
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
});

type TrackCardProps = {
  track: Track;
  onPress: () => void;
};

const TrackCard = ({track, onPress}: TrackCardProps) => {
  return (
    <>
      <Rating
        containerStyle={styles.rating}
        rating={5}
        track={track}
        disabled
      />
      <UIButton onPress={onPress} containerStyle={styles.container}>
        <Image
          source={{uri: track.artwork?.toString()}}
          resizeMode="cover"
          style={styles.cover}
        />
        <Row style={styles.bottomContainer}>
          <UIText style={styles.txtTrackTitle}>{track.title}</UIText>
        </Row>
      </UIButton>
    </>
  );
};

export default TrackCard;
