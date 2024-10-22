import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

type ProductProps = {
  navigation: StackNavigationProp<any, any>;
};


const { width } = Dimensions.get('window'); // Get device width for responsive layout

const ProductScreen: React.FC<ProductProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); // Set fetched products
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message); // Log only the message for now
      });
  }, []);
  

  // Render each product item
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={productStyles.productContainer}>
      <Image source={{ uri: item.image }} style={productStyles.productImage} />
      <Text style={productStyles.productTitle}>{item.title}</Text>
      <Text style={productStyles.productPrice}>${item.price}</Text>
      <Text style={productStyles.productCategory}>{item.category}</Text>
    </View>
  );

  return (
    <View style={productStyles.container}>
      {loading ? (
        <Text style={productStyles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2} // Display products in a grid with 2 columns
          contentContainerStyle={productStyles.contentContainer}
        />
      )}
    </View>
  );
};

// Define styles for the product UI
const productStyles = StyleSheet.create({
  container: {

    paddingTop: 20,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: width / 2.5,
    height: width / 2.5,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ProductScreen;
