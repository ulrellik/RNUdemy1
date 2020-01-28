import React, { useMemo, useCallback } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES, MEALS } from "../dummy-data";
import MealIem from "../components/MealItem";

export default function Categories({ navigation }) {
  const id = navigation.getParam('id');
  const meals = useMemo(() => MEALS.filter(meal => meal.categoryIds.includes(id)), [MEALS, id]);
  const onPress = useCallback((id) => navigation.navigate('Details', { id }),[navigation]);
  const renderItem = useCallback((data) => <MealIem meal={data.item} onPress={onPress}/>,[onPress]);

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
