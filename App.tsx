import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from '@providers/ThemeProvider';
import { useCachedResources } from '@hooks/useCachedResources';
import RootNavigation from '@navigation/RootNavigation';
import store, { persistor } from '@redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider>
            <SafeAreaProvider>
              <RootNavigation />
              <StatusBar />
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
