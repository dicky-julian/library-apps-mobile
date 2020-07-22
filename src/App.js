import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from './redux/store';
// UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './assets/custom-theme.json';
// Components
import Topnav from './components/Topnav';
import Navbar from './components/Navbar';

const { store, persiststore } = storage;

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persiststore}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Topnav />
        <Navbar />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);