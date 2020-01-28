import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Categories, Category, Details } from '../screens';
import { Platform } from "react-native";
import { colors } from "../styles";

export default createAppContainer(createStackNavigator({
  Categories,
  Category,
  Details,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primary : undefined,
    },
    headerTintColor: Platform.OS === 'ios' ? colors.primary : 'white',
  },
}));
