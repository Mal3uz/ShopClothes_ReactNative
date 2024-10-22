import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';

type FooterProps = {
  navigation: StackNavigationProp<any, any>;
};

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.buttonContainer}>
        <Icon.Button
          name="home-outline"
          backgroundColor="transparent"
          color="orange"
          size={30}
          onPress={() => navigation.navigate('Home')}
        >
          Home
        </Icon.Button>
      </View>

      <View style={styles.buttonContainer}>
        <Icon.Button
          name="shirt-outline"
          backgroundColor="transparent"
          color="gray"
          size={30}
          onPress={() => navigation.navigate('Product')}
        >
          Clothes
        </Icon.Button>
      </View>

      <View style={styles.buttonContainer}>
        <Icon.Button
          name="cart-outline"
          backgroundColor="transparent"
          color="gray"
          size={30}
          onPress={() => navigation.navigate('Order')}
        >
          Order
        </Icon.Button>
      </View>

      <View style={styles.buttonContainer}>
        <Icon.Button
          name="person-outline"
          backgroundColor="transparent"
          color="gray"
          size={30}
          onPress={() => navigation.navigate('Profile')}
        >
          Profile
        </Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff', // Background color of the footer
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Footer;
