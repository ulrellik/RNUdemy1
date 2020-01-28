import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function MealIem({ meal, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress.bind(this, meal.id)}>
      <ImageBackground style={styles.background} source={{ uri: meal.imageUrl }}>
        <Text style={styles.title} numberOfLines={1}>{meal.title}</Text>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>{meal.duration}min</Text>
          <Text style={styles.footer}>{meal.complexity}</Text>
          <Text style={styles.footer}>{meal.affordability}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    fontFamily: 'cabin-sketch',
    fontSize: 25,
    color: 'white',
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
