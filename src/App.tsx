/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useRef} from 'react';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './api';
import RootStack from './navigation/RootStack';
import {RootStackParamList} from './navigation/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tracks from './mocks/tracks.json';

import {createServer} from 'miragejs';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/tracks', () => {
      return tracks;
    });
  },
});

const App = () => {
  const navRef = useRef<NavigationContainerRef<RootStackParamList>>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navRef}>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
