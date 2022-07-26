import {View, Image, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../constants/styles';

const Input = ({onSearch}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: '70%',
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png',
        }}
        style={{width: 24, height: 24}}
      />
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: Colors.gray,
          width: '80%',
          height: 30,
          padding: 5,
        }}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default Input;
