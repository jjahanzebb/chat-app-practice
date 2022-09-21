import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {Button, Input, Image} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // console.log('auth => ', auth);
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      // console.log('authUser login => ', authUser);
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => Alert.alert(error));
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 h-screen items-center justify-center bg-white">
        <StatusBar backgroundColor="#2C6BED" barStyle="light-content" />

        <View className="items-center">
          <Image
            source={require('../assets/signal-logo.png')}
            style={{
              height: 150,
              width: 150,
              borderRadius: 20,
            }}
          />
        </View>

        <View className="mt-10 w-72">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={text => setEmail(text)}
            autoFocus
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={text => setPassword(text)}
            onSubmitEditing={signIn}
            secureTextEntry
          />
        </View>

        <Button title="Login" onPress={signIn} containerStyle={styles.button} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
          containerStyle={styles.button}
          type="outline"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {width: 250, marginTop: 10},
});
