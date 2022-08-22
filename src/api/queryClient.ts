import { QueryClient } from 'react-query';
import NetInfo from '@react-native-community/netinfo';

let enabled = true;

NetInfo.addEventListener(state => {
  enabled = !(state.isInternetReachable === false || !state.isConnected);
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      retry: false,
      enabled: enabled,
    },
  },
});
