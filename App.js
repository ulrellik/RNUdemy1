import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";

import Meals from './navigation/Meals';

enableScreens();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={() => Font.loadAsync({ 'cabin-sketch': require('./assets/CabinSketch-Regular.ttf') })}
        onFinish={() => setLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Meals />
  );
}
