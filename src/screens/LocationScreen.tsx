import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StackNavigationProp } from '@react-navigation/stack';

type LocationProps = {
  navigation: StackNavigationProp<any, any>;
};

const { width } = Dimensions.get('window');

const LocationScreen: React.FC<LocationProps> = ({ navigation }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Fetch user location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View style={productStyles.container}>
      {/* Top section with location services */}
      <View style={productStyles.locationContainer}>
        <Text style={productStyles.locationText}>
          {location ? 'Nearby Stores' : 'Turn on location to see nearby stores'}
        </Text>
        {!location && (
          <Button
            title="Enable Location"
            onPress={async () => {
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status === 'granted') {
                let currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);
              } else {
                setErrorMsg('Permission to access location was denied');
              }
            }}
          />
        )}
      </View>

      {/* Map showing user location */}
      <MapView
        style={productStyles.map}
        // Setting default region to Da Nang, Vietnam
        region={{
          latitude: location?.coords.latitude || 16.047079,
          longitude: location?.coords.longitude || 108.206230,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker for user location if available */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
        )}
        
        {/* Marker for Da Nang */}
        {!location && (
          <Marker
            coordinate={{
              latitude: 16.047079,
              longitude: 108.206230,
            }}
            title="Da Nang, Vietnam"
          />
        )}
      </MapView>
    </View>
  );
};

// Define styles for the product UI
const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 250,
  },
});

export default LocationScreen;
