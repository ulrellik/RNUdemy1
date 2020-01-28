import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function MealIem({ meal }) {
  return (
    <Text>{meal.title}</Text>
  );
};
