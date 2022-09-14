import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListItem, Avatar} from '@rneui/themed';

const CustomListItem = (id, chatName, enterChat) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            // chatMessages?.[0]?.photoURL ||
            'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
        }}
      />

      <ListItem.Content>
        <ListItem.Title className="font-extrabold">Youtube</ListItem.Title>

        <ListItem.Subtitle className="" numberOfLines={1} ellipsizeMode="tail">
          This is my youtube chatssssssssssssssssssssssssssssssssssssssss
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
