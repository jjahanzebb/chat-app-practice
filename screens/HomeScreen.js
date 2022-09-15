import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import CustomListItem from '../components/CustomListItem';
import {Avatar} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Firebase from '../firebase';
import {getAuth, signOut} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
  const signOutUser = () => {
    const outcheck = Alert.alert('Sign Out', 'Do you want to sign out?', [
      {
        text: 'Yes',
        onPress: () => {
          signOut(getAuth(Firebase.app)).then(() => {
            navigation.replace('Login');
          });
        },
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chatapp',
      headerStyle: {backgroundColor: '#ffffff'},
      headerTitleStyle: {color: '#2C6BED'},
      headerLeft: () => (
        <View className="m-2">
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{uri: Firebase.auth?.currentUser?.photoURL}}
            />
          </TouchableOpacity>
        </View>
      ),

      headerRight: () => (
        <View className="flex-row justify-around w-20 mr-0">
          <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome name="camera" size={20} color="#2C6BED" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AddChat')}
            activeOpacity={0.5}>
            <FontAwesome name="pencil-square-o" size={22} color="#2C6BED" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
