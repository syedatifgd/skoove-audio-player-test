import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {Track} from 'react-native-track-player';
import {queryClient} from '../../../api';
import {QueryKey} from '../../../api/helpers';
import useTracks from '../../../domain/track/queries/useTracks';
import toTrackPlayer from '../../../domain/track/transform/toTrackPlayer';
import {AppScreen} from '../../../navigation/types';
import {Page} from '../../atoms';
import AppBar from '../../molecules/AppBar/AppBar';
import TrackCard from '../../organisms/TrackCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const HomeScreen = () => {
  const {data} = useTracks();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const navigation = useNavigation<AppScreen<'Home'>>();
  const keyExtractor = (item: Track, index: number) => `${item.title}-${index}`;

  const onPressTrack = (track: Track) => {
    navigation.navigate('Player', {
      track,
    });
  };
  const renderItem = useCallback(({item}: {item: Track}) => {
    return <TrackCard track={item} onPress={() => onPressTrack(item)} />;
  }, []);

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        colors={['#83A2BE']}
        tintColor={'#83A2BE'}
        refreshing={isRefreshing}
        onRefresh={async () => {
          setIsRefreshing(true);
          await queryClient.invalidateQueries([
            QueryKey.useTracks,
            QueryKey.useRating,
          ]);
          setTimeout(() => {
            setIsRefreshing(false);
          }, 4000);
        }}
      />
    ),
    [isRefreshing],
  );

  return (
    <Page>
      <AppBar title={'Skoovin'} />
      <FlatList
        data={toTrackPlayer(data?.data)}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={4}
        refreshControl={refreshControl}
        contentContainerStyle={styles.container}
      />
    </Page>
  );
};

export default HomeScreen;
