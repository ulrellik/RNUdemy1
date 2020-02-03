import React from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';

import { colors } from '../styles'

export default function LabeledSwitch({ label, value, onChange }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        thumbColor={colors.primary}
        trackColor={{ true: Platform.OS === 'android' ? colors.primary : undefined }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
