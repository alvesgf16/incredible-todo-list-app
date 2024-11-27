import React from 'react';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import styles from '../components/ui/styles';

const AboutScreen = ({ navigation }) => {
  const appName = 'Incredible To-Do-List';
  const developerName = 'Gabriel Alves';
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDeveloperNamePress = () => {
    Alert.alert('Easter Egg!', 'You found the secret message!');
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About {appName}</Text>
        <TouchableOpacity onPress={handleDeveloperNamePress}>
          <Text style={styles.text}>Developed by: {developerName}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Current Date: {currentDate}</Text>
        <Button title="Go to Home Screen" onPress={() => navigation.goBack()} />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
