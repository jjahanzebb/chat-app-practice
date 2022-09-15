import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Button, Input} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Entypo';
import Firebase from '../firebase';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

const AddChatScreen = ({navigation}) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
    });
  }, [navigation]);

  const createChat = async () => {
    const db = getFirestore(Firebase.app);
    const dbRef = collection(db, 'chats');

    await addDoc(
      dbRef,
      {
        chatName: 'input',
      },
      {merge: true},
    )
      .then(docRef => {
        navigation.goBack();
      })
      .catch(error => Alert.alert(error));
  };

  return (
    <View className="">
      <StatusBar backgroundColor="#2C6BED" barStyle="light-content" />

      <Input
        placeholder="Enter a chat name.."
        value={input}
        onChangeText={text => setInput(text)}
        leftIcon={<Icon name="chat" size={20} color="#000000" />}
      />

      <Button onPress={createChat} title="Create New Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
