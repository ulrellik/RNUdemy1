import React from 'react';
import { View, Text} from 'react-native';
import { Item } from 'react-navigation-header-buttons';

import { MEALS } from '../dummy-data';
import HeaderButtons from '../navigation/HeaderButtonsCustomized';


export default function Details({ navigation }) {
  const id = navigation.getParam('id');
  const meal = MEALS.find(meal => meal.id === id);
  return (
      <Text>{meal.title}</Text>
  );
};

Details.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerTitle: MEALS.find(meal => meal.id === id).title,
    headerRight: () => (
      <HeaderButtons>
        <Item title="Favorite" iconName="md-star-outline" onPress={()=>{}}/>
      </HeaderButtons>
    ),
  };
};
