import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SuccessScreenProps = {
    navigation: any;
};

const SuccessScreen: React.FC<SuccessScreenProps> = ({ navigation }) => {
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        
        // Hide the notification after 5 seconds
        const notificationTimer = setTimeout(() => setShowNotification(false), 5000);

        const navigationTimer = setTimeout(() => {
            navigation.navigate('Login');
        }, 6000);

        // Cleanup timers when the component unmounts
        return () => {
            clearTimeout(notificationTimer);
            clearTimeout(navigationTimer);
        };
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {true && (
                <View style={styles.notificationBar}>
                    <Icon name={"facebook"} size={30} color="blue" />
                    <View style={styles.containerTextHeader}>
                        <Text style={styles.notificationTitle}>Chào mừng bạn iu</Text>
                        <Text style={styles.notificationMessage}>Từ giờ piggy sẽ đồng hành cùng bạn</Text>
                    </View>
                </View>
            )}
            <Text style={styles.successMessage}>Đăng ký thành công</Text>
            <Image style={styles.logo} source={require('.././assets/shopClosing.png')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    notificationBar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: '92%',
        backgroundColor: '#f0f0f0',
        padding: 10,
        zIndex: 1,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: 200,
        borderRadius: 15,
    },
    containerTextHeader: {
      marginLeft: 15
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    notificationMessage: {
        fontSize: 14,
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SuccessScreen;
