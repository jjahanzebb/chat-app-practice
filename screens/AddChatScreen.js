import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Button, Input} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Entypo';

import {db} from '../firebase';

const AddChatScreen = ({navigation}) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection('chats')
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => Alert.alert(error));
  };

  return (
    <View className="bg-white p-6 h-full">
      <StatusBar backgroundColor="#2C6BED" barStyle="light-content" />

      <Input
        placeholder="Enter a chat name.."
        value={input}
        onChangeText={text => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={<Icon name="chat" size={20} color="#000000" />}
      />

      <Button onPress={createChat} title="Create New Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
