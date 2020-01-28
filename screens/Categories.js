import React, { useCallback } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../dummy-data";

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 150,
    margin: 10,
  }
});

export default function Categories({ navigation }) {
  const renderItem = useCallback(data => (
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Category', { id: data.item.id })}>
      <Text>{data.item.title}</Text>
    </TouchableOpacity>
  ), [navigation]);

  return (
    <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2}/>
  );
};
