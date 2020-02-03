import React from 'react';
import { Text} from 'react-native';
import { Item } from 'react-navigation-header-buttons';

import { MEALS } from '../dummy-data';
import HeaderButtons from '../navigation/HeaderButtonsCustomized';
import {FavoritesContext} from "../context";


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
      <FavoritesContext.Consumer>
        {context => {
          const favored = context.favorites.includes(id);
          return (
            <HeaderButtons>
              <Item
                title="Favorite"
                iconName={favored ? 'md-star' : 'md-star-outline'}
                onPress={() => favored ? context.remove(id) : context.add(id)}
              />
            </HeaderButtons>
          );
        }}
      </FavoritesContext.Consumer>

    ),
  };
};
