import React, { useMemo } from 'react';

import { CATEGORIES, MEALS } from "../dummy-data";
import { MealList } from "../components/Meals";

export default function Categories({ navigation }) {
  const id = navigation.getParam('id');
  const meals = useMemo(() => MEALS.filter(meal => meal.categoryIds.includes(id)), [MEALS, id]);

  return (
    <MealList meals={meals} />
  );
};

Categories.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerTitle: CATEGORIES.find(cat => cat.id === id).title,
  };
};
