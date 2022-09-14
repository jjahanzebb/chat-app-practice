import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import CustomListItem from '../components/CustomListItem';
import {Avatar} from '@rneui/themed';

import Firebase from '../firebase';

const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chatapp',
      headerStyle: {backgroundColor: '#ffffff'},
      headerTitleStyle: {color: '#2C6BED'},
      headerLeft: () => (
        <View className="m-2">
          <TouchableOpacity>
            <Avatar
              rounded
              source={{uri: Firebase.auth?.currentUser?.photoURL}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
