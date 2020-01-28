import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';

import { Categories, Category, Details, Favorites } from '../screens';
import { Platform } from "react-native";
import { colors } from "../styles";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : undefined,
  },
  headerTintColor: Platform.OS === 'ios' ? colors.primary : 'white',
};

const categoriesStack = createStackNavigator({
  Categories,
  Category,
  Details,
}, { defaultNavigationOptions });

const favoritesStack = createStackNavigator({
  Favorites,
  Details,
}, { defaultNavigationOptions });

const bottomTabs = createBottomTabNavigator({
  Categories: {
    screen: categoriesStack,
    navigationOptions: {
     tabBarIcon: ({tintColor}) => <Ionicons name="ios-albums" size={23} color={tintColor} />,
    }
  },
  Favorites: {
    screen: favoritesStack,
    navigationOptions: {
     tabBarIcon: ({tintColor}) => <Ionicons name="md-star" size={23} color={tintColor} />,
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.primary,
  }
});

export default createAppContainer(bottomTabs);
