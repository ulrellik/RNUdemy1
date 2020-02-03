import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from '@expo/vector-icons';

import { Categories, Category, Details, Favorites, Filters } from '../screens';
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

const filtersStack = createStackNavigator({
  Filters,
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

const drawer = createDrawerNavigator({
  Home: bottomTabs,
  Filters: filtersStack,
}, {
  contentOptions: { activeTintColor: colors.primary },
});

export default createAppContainer(drawer);
