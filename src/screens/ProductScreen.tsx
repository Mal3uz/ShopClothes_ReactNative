import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../styles/commonStyles'; // Import styles

const ProductScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Here are the products</Text> 
    </View>
  );
};

export default ProductScreen;
