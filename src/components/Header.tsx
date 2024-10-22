import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  const navigationGoback = useNavigation(); 

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.backButton} onPress={() => navigationGoback.goBack()}>
        <Icon name={"chevron-left"} size={30} color="grey" style={styles.backIcon} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Clothes Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    flexDirection: 'row'
  },
  backButton: {
    marginRight: 10
  },
  backIcon: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;