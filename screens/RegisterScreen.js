import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';

import {Image, Button, Input, Text} from '@rneui/themed';
import {UIManager} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Firebase from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  //   updateProfile,
} from 'firebase/auth';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(getAuth(Firebase.app), email, password)
      .then(authUser => {
        updateProfile(authUser.user, {
          displayName: name,
          photoURL:
            imageUrl ||
            'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
        });
      })
      .catch(error => Alert.alert(error.message));
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 h-screen items-center justify-center bg-white -mb-10">
        <StatusBar style="light" backgroundColor="#2C6BED" />

        <View className="items-center mb-6">
          <Image
            source={require('../assets/signal-logo.png')}
            style={{
              height: 75,
              width: 75,
              borderRadius: 10,
            }}
          />
        </View>

        <Text h4 className="mb-12">
          Create a Chatapp account
        </Text>

        <View className="mt-10 w-72">
          <Input
            placeholder="Full Name"
            type="text"
            value={name}
            onChangeText={text => setName(text)}
            autoFocus
          />

          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <Input
            placeholder="Profile Picture URL (optional)"
            type="text"
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
            onSubmitEditing={register}
          />
        </View>

        <Button
          title="Register"
          onPress={register}
          containerStyle={styles.button}
          raised
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {width: 250, marginTop: 10},
});
