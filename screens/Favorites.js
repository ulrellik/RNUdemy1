import React from 'react';

import { MEALS } from "../dummy-data";
import { MealList } from "../components/Meals";
import { MenuButton } from "../navigation/HeaderButtons";


export default function Favorites() {
  return (
    <MealList meals={MEALS} />
  );
};

Favorites.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <MenuButton navigation={navigation} />,
});

