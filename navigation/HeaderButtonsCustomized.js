import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import colors from "../styles/colors";

const IoniconsHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'ios' ? colors.primary : 'white'} />
);

const HeaderButtonsCustomized = props => (
  <HeaderButtons {...props} HeaderButtonComponent={IoniconsHeaderButton} />
);

export default HeaderButtonsCustomized;
