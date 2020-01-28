import React, { useCallback } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../dummy-data";

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 150,
    margin: 10,
    padding : 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 5,
    // Android
    elevation: 2,
    // iOS
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: 'cabin-sketch',
    textAlign: 'right',
  },
});

export default function Categories({ navigation }) {
  const renderItem = useCallback(data => (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: data.item.color }]}
      onPress={() => navigation.navigate('Category', { id: data.item.id })}
    >
      <Text style={styles.title} numberOfLines={2}>{data.item.title}</Text>
    </TouchableOpacity>
  ), [navigation]);

  return (
    <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2}/>
  );
};
