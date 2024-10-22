import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Clothes Shop</Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate('Product')}
      />

      <Button
        title="View Location"
        onPress={() => navigation.navigate('Location')}
      />

      <Button
        title="Back to login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
