import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type LoginScreenProps = {
  navigation: StackNavigationProp<any, any>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation,setIsLoggedIn }) => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigationGoback = useNavigation(); // Navigation hook to go back

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true)
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigationGoback.goBack()}>
        <Icon name={"chevron-left"} size={30} color="grey" style={styles.backIcon} />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        style={styles.logoStyle}
        source={require('.././assets/shopClosing.png')}
      />

      {/* Welcome Text */}
      <Text style={styles.textHeader}>ShopStore mừng bạn quay lại</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.inputStyle}
        onChangeText={setGmail}
        value={gmail}
        placeholder="Tên đăng nhập"
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setPassword}
          value={password}
          placeholder="Mật khẩu"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => { setPasswordVisible(!isPasswordVisible) }} style={styles.iconStyle}>
          <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="grey" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Quên mật khẩu</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Social Login Options */}
      <Text style={styles.orText}>Hoặc đăng nhập với</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name={"facebook"} size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name={"gmail"} size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name={"apple"} size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.createAccountDiv}>
        <Text style={styles.signupText}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}> Đăng ký</Text>
        </TouchableOpacity>
      </View>
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
    width: 100,
    height: 100,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#333',
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconStyle: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#999',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#999',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupText: {
    color: '#999',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  createAccountDiv: {
    flexDirection: 'row',
  }
});

export default LoginScreen;
