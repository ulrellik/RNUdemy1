import React from 'react';
import { Text} from 'react-native';

import { MenuButton } from "../navigation/HeaderButtons";

export default function Filters(props) {
  return (
    <Text>Filters</Text>
  );
};

Filters.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <MenuButton navigation={navigation} />,
});
