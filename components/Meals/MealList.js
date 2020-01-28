import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'

import MealItem from "./MealItem";

export default function MealList({ meals }) {
  const { navigate } = useNavigation();
  const onPress = useCallback((id) => navigate('Details', { id }),[navigate]);
  const renderItem = useCallback((data) => <MealItem meal={data.item} onPress={onPress}/>,[onPress]);

  return (
    <FlatList data={meals} renderItem={renderItem} />
  );
};
