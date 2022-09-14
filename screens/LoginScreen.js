import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Input, Image} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import Firebase from '../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = Firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const signIn = () => {};

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 h-screen items-center justify-center bg-white">
        <StatusBar style="light" backgroundColor="#2C6BED" />
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
