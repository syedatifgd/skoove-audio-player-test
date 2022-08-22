import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Row} from '../../atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UIIcon from '../../atoms/UIIcon/UIIcon';
import {Track} from 'react-native-track-player';
import useRating from '../../../domain/track/queries/useRating';
import {queryClient} from '../../../api';
import {QueryKey} from '../../../api/helpers';

type RatingProps = {
  rating: number;
  track: Track;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const styles = StyleSheet.create({
  btnRating: {
    marginHorizontal: 5,
  },
});

const Rating = ({rating = 5, track, containerStyle, disabled}: RatingProps) => {
  const {data: ratingData} = useRating(track);

  const set = Array.from(Array(rating));

  const setRating = async (selectedScore: number) => {
    const trackRating = {
      title: track.title,
      rating: selectedScore,
    };
    await AsyncStorage.setItem(`${track?.title}`, JSON.stringify(trackRating));
    return await queryClient.invalidateQueries([QueryKey.useRating]);
  };

  return (
    <Row style={containerStyle}>
      {set.map((_, index) => {
        return (
          <TouchableOpacity
            disabled={disabled}
            key={`${index}`}
            onPress={() => setRating(index + 1)}
            style={styles.btnRating}>
            {index + 1 <= ratingData?.rating ? (
              <UIIcon name="star-filled" />
            ) : (
              <UIIcon name="star" />
            )}
          </TouchableOpacity>
        );
      })}
    </Row>
  );
};

export default Rating;
