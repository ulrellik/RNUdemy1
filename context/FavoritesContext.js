import React from 'react';

const FavoritesContext = React.createContext({
  favorites: [],
  add: () => {},
  remove: () => {},
});

export default FavoritesContext;
