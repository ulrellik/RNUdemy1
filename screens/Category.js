import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES, MEALS } from "../dummy-data";
import MealIem from "../components/MealItem";

function renderItem(data) {
  return <MealIem meal={data.item}/>;
}

export default function Categories({ navigation }) {
  const id = navigation.getParam('id');
  const meals = useMemo(() => MEALS.filter(meal => meal.categoryIds.includes(id)), [MEALS, id]);

  return (
    <FlatList data={meals} renderItem={renderItem} />
  );
};

Categories.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerTitle: CATEGORIES.find(cat => cat.id === id).title,
  };
};
