import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type ProfileProps = {
  navigation: StackNavigationProp<any, any>;
};

// Update the Profile interface to match your data
interface Profile {
  id: number;
  email: string;
  username: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
}

const { width } = Dimensions.get('window'); // Get device width for responsive layout

const ProfileScreen: React.FC<ProfileProps> = ({ navigation }) => {
  const [profile, setProfile] = useState<Profile | null>(null); // State for profile data
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users/1') // Replace with your actual API endpoint
      .then((response) => {
        setProfile(response.data); // Set fetched profile data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message); // Log only the message for now
      });
  }, []);

  return (
    <View style={profileStyles.container}>
      {loading ? (
        <Text style={profileStyles.loadingText}>Loading...</Text>
      ) : (
        profile && (
          <View style={profileStyles.profileContainer}>
            {/* Avatar placeholder */}
            <Image
                style={profileStyles.avatar}
                source={require('.././assets/shopClosing.png')}
            />
            <Text style={profileStyles.name}>{profile.name.firstname} {profile.name.lastname}</Text>
            <Text style={profileStyles.email}>{profile.email}</Text>
            <Text style={profileStyles.phone}>Phone: {profile.phone}</Text>
            <Text style={profileStyles.address}>
              Address: {profile.address.number} {profile.address.street}, {profile.address.city}, {profile.address.zipcode}
            </Text>
            <Text style={profileStyles.geoLocation}>
              Lat: {profile.address.geolocation.lat}, Long: {profile.address.geolocation.long}
            </Text>
          </View>
        )
      )}
    </View>
  );
};

// Define styles for the profile UI
const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  avatar: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 4,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  geoLocation: {
    fontSize: 14,
    color: '#888',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ProfileScreen;
