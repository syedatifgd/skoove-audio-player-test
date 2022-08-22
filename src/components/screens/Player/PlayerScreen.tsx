import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {AppScreen, RoutePropApp} from '../../../navigation/types';
import {SetupService} from '../../../services';
import {TrackInfo, Progress, Page, BarIcon} from '../../atoms';
import AppBar from '../../molecules/AppBar/AppBar';
import Rating from '../../molecules/Rating';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 3,
    alignItems: 'center',
  },
  actionRowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rating: {
    marginTop: 20,
  },
});

const PlayerScreen = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const navigation = useNavigation<AppScreen<'Player'>>();
  const route = useRoute<RoutePropApp<'Player'>>();
  const track = route.params.track;
  useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await TrackPlayer.add([
          {
            ...track,
          },
        ]);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      }
    }

    run();

    async function unsubscribe() {
      await TrackPlayer.reset();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isPlayerReady) {
    return <ActivityIndicator />;
  }

  return (
    <Page>
      <AppBar
        title={track.title}
        left={
          <BarIcon
            size="md"
            iconName="back"
            onPress={() => navigation.goBack()}
            iconSize={20}
          />
        }
      />
      <View style={styles.contentContainer}>
        <TrackInfo track={track} />
        <Progress />
        <Rating containerStyle={styles.rating} rating={5} track={track} />
      </View>
    </Page>
  );
};

export default PlayerScreen;
