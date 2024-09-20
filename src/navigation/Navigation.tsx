import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import MainLayout from '../MainLayout';

const Stack = createStackNavigator();

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const renderScreens = useMemo(() => {
        if (!isLoggedIn) {
            return (
                <Stack.Screen
                    name="Login"
                    options={{ headerShown: false }}
                >
                    {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            );
        } else {
            return (
                <>
                    <Stack.Screen
                        name="Home"
                        options={{ headerShown: false }}
                    >
                        {(props) => (
                            <MainLayout>
                                <HomeScreen {...props} />
                            </MainLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Product" component={ProductScreen} />
                </>
            );
        }
    }, [isLoggedIn]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {renderScreens}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
