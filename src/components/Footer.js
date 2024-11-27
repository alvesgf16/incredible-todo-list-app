import React from 'react';
import { View, Text } from 'react-native';
import styles from './ui/styles';

const Footer = () => {
  return (
    <View style={styles.footerTitle}>
      <Text style={styles.footerText}>© 2024 Incredible Todo List App</Text>
    </View>
  );
};

export default Footer;