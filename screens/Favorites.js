import React, {useContext} from 'react';

import { MEALS } from "../dummy-data";
import {FavoritesContext} from '../context';
import { MealList } from "../components/Meals";
import { MenuButton } from "../navigation/HeaderButtons";


export default function Favorites() {
  const context = useContext(FavoritesContext);
  const meals = MEALS.filter(meal => context.favorites.includes(meal.id));
  return (
    <MealList meals={meals} />
  );
};

Favorites.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <MenuButton navigation={navigation} />,
});

