import React from 'react';
import { View, Text } from 'react-native';
import styles from './ui/styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Incredible Todo List App</Text>
    </View>
  );
};

export default Header;