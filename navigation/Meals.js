import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Categories, Category, Details } from '../screens';

export default createAppContainer(createStackNavigator({
  Categories,
  Category,
  Details,
}));
