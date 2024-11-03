import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type CategoryScreenProps = {
    navigation: StackNavigationProp<any, any>;
    route: {
        params?: {
            category?: string;
        };
    };
};

const CategoryScreen: React.FC<CategoryScreenProps> = ({ route }) => {
    const { category } = route.params || { category: '' };

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            if (!category) {
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProductsByCategory();
    }, [category]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    if (!category) {
        return (
            <View style={styles.loadingContainer}>
                <Text>No category selected.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.productCard}>
                    <Image source={{ uri: item.image }} style={styles.productImage} />
                    <Text style={styles.productName}>{item.title}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productCard: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    productPrice: {
        fontSize: 12,
        color: '#333',
        marginTop: 5,
    },
});

export default CategoryScreen;
