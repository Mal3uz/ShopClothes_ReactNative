// src/components/MainLayout.tsx

import React from 'react';
import { View, StyleSheet,SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header'; 
import Footer from './components/Footer';
import { StackNavigationProp } from '@react-navigation/stack';

type MainLayoutProps = {
  children: React.ReactNode;
  navigation: StackNavigationProp<any, any>;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      <View style={styles.content}>
        {children}
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the container takes the full screen height
  },
  content: {
    flex: 1, // This ensures the content takes all available space
    width: '100%', // Make sure the content is full width
    padding: 16,
  },
});

export default MainLayout;
