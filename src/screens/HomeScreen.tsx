// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const { width } = Dimensions.get('window');

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        // Fetch products
        const productResponse = await fetch('https://fakestoreapi.com/products');
        const productData = await productResponse.json();
        setProducts(productData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Welcome to the Clothes Shop</Text>
        <TouchableOpacity style={styles.bannerButton} onPress={() => navigation.navigate('Product')}>
          <Text style={styles.bannerButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Category Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Category', { category })}
            >
              <Image
                source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image for categories
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Hot Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hot Products</Text>
        <View style={styles.productGrid}>
          {products.slice(0, 4).map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.title}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <TouchableOpacity style={styles.viewDetailsButton} onPress={() => navigation.navigate('Product', { productId: product.id })}>
                <Text style={styles.viewDetailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Additional Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="View Location" onPress={() => navigation.navigate('Location')} />
        <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#3b5998',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryScroll: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
    width: 80,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
  },
  productGrid: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    width: width * 0.85,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  viewDetailsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
