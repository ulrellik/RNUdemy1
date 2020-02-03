import React, { useState, useCallback, useMemo } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";

import Meals from './navigation/Meals';
import {FavoritesContext} from "./context";

enableScreens();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const [favorites, setFavorites] = useState([]);
  const addFavorite = useCallback(value => setFavorites([...favorites, value]), [favorites]);
  const removeFavorite = useCallback(value => setFavorites(favorites.filter(favorite => favorite !== value)), [favorites]);

  const favoritesContextValue = useMemo(() => ({
    favorites,
    add: addFavorite,
    remove: removeFavorite,
  }), [favorites, addFavorite, removeFavorite]);

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
    <FavoritesContext.Provider value={favoritesContextValue}><Meals /></FavoritesContext.Provider>
  );
}
