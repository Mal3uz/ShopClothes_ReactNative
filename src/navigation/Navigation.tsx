import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CommitmentScreen from '../screens/CommitmentScreen';
import SuccessScreen from '../screens/SuccessScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MainLayout from '../MainLayout';

const Stack = createStackNavigator();

const Navigation = () => {
    // Set isLoggedIn to true to start at Home screen
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
                {!isLoggedIn ? (
                    <>
                        <Stack.Screen
                            name="Login"
                            options={{ headerShown: false }}
                        >
                            {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                        </Stack.Screen>
                        <Stack.Screen
                            name="SignUp"
                            options={{ headerShown: false }}
                            component={SignUpScreen}
                        />
                        <Stack.Screen
                            name="Commitment"
                            options={{ headerShown: false }}
                        >
                            {(props) => <CommitmentScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                        </Stack.Screen>
                        <Stack.Screen
                            name="SuccessS"
                            options={{ headerShown: false }}
                            component={SuccessScreen}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Home"
                            options={{ headerShown: false }}
                        >
                            {(props) => (
                                <MainLayout {...props}>
                                    <HomeScreen {...props} />
                                </MainLayout>
                            )}
                        </Stack.Screen>
                        <Stack.Screen
                            name="Product"
                            options={{ headerShown: false }}
                        >
                            {(props) => (
                                <MainLayout {...props}>
                                    <ProductScreen {...props} />
                                </MainLayout>
                            )}
                        </Stack.Screen>
                        <Stack.Screen
                            name="Location"
                            options={{ headerShown: false }}
                        >
                            {(props) => (
                                <MainLayout {...props}>
                                    <LocationScreen {...props} />
                                </MainLayout>
                            )}
                        </Stack.Screen>
                        <Stack.Screen
                            name="Profile"
                            options={{ headerShown: false }}
                        >
                            {(props) => (
                                <MainLayout {...props}>
                                    <ProfileScreen {...props} />
                                </MainLayout>
                            )}
                        </Stack.Screen>
                        <Stack.Screen name="Category" options={{ headerShown: false }}>
                            {(props) => (
                                <MainLayout {...props}>
                                    <CategoryScreen {...props} />
                                </MainLayout>
                            )}
                        </Stack.Screen>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
