import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/ui/styles';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

export default MainLayout;
