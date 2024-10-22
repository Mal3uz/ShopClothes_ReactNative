import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CommitmentScreenProps = {
    navigation: StackNavigationProp<any, any>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};


const CommitmentScreen: React.FC<CommitmentScreenProps> = ({ navigation, setIsLoggedIn }) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigationGoback = useNavigation(); // Navigation hook to go back

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigationGoback.goBack()}>
                <Icon name={"chevron-left"} size={30} color="grey" style={styles.backIcon} />
            </TouchableOpacity>

            {/* Welcome Text */}
            <View style={styles.borderHeader}>
                <Text style={styles.textHeader}>ShopStore cam kết bảo mật thông tin người dùng và chỉ sử dụng cho mục đích tối ưu và cá nhân hóa trải nghiệm người dùng</Text>
            </View>
            {/* Logo */}
            <Image
                style={styles.logoStyle}
                source={require('.././assets/shopClosing.png')}
            />

            <View style={styles.conditionDiv}>
                <BouncyCheckbox
                    isChecked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    fillColor="#4CAF50" // Color when checked
                    iconStyle={{
                        borderColor: '#4CAF50',
                        borderWidth: 2,
                        borderRadius: 0,
                    }}
                    innerIconStyle={{
                        borderWidth: 2, // Optional: border width for inner icon
                        borderRadius: 0, // Set border radius to 0 for inner icon
                    }}
                    style={{ marginVertical: 10 }}
                />
                <Text style={styles.containterConditonText}>
                    Tôi đã đọc, hiểu và đồng ý với
                    <Text style={styles.highlightedText}> điều khoản sử dụng </Text>
                    của ShopStore
                </Text>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                if (isChecked) {
                    // Navigate to the success screen
                    navigation.navigate('SuccessS');
                } else {
                    alert('Please agree to the terms and conditions');
                }
            }}>
                <Text style={styles.loginButtonText}>Tiếp tục</Text>
            </TouchableOpacity>

            {/* 
    //    radio selected
       <BouncyCheckbox
        isChecked={isChecked}
        text="I agree to the terms and conditions"
        onPress={() => setIsChecked(!isChecked)}
        fillColor="#4CAF50" // Color when checked
        iconStyle={{ borderColor: '#4CAF50', borderRadius: 5 }} // Custom border for checkbox
        textStyle={{ textDecorationLine: 'none' }} // Remove underline
        style={{ marginVertical: 10 }} // Add some margin
      /> */}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    backIcon: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    logoStyle: {
        width: 250,
        height: 250,
        marginBottom: 50,
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        textAlign: 'justify'
    },
    borderHeader: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#FFEEAD',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    conditionDiv: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingRight: 40,
    },
    containterConditonText: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600',
    },
    highlightedText: {
        color: 'green'
    }
});

export default CommitmentScreen;
