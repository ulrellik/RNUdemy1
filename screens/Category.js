import React from 'react';
import { View, Text} from 'react-native';

import { styles } from '../styles'

import { CATEGORIES } from "../dummy-data";

export default function Categories({ navigation }) {

  return (
    <View style={styles.screen}>
      <Text>Category</Text>
    </View>
  );
};

Categories.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerTitle: CATEGORIES.find(cat => cat.id === id).title,
  };
};
