import React, { useCallback } from "react";
import { Item } from "react-navigation-header-buttons";

import HeaderButtons from "./HeaderButtonsCustomized";

export function MenuButton({ navigation }) {
  const onPress = useCallback(() => navigation.openDrawer(), [navigation]);

  return (
    <HeaderButtons>
      <Item title="Menu" iconName="md-menu" onPress={onPress}/>
    </HeaderButtons>
  );
}
