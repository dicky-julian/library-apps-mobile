import React from 'react';
// UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './assets/custom-theme.json';

import Topnav from './components/Topnav';
import Navbar from './components/Navbar';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Topnav/>
      <Navbar />
    </ApplicationProvider>
  </>
);