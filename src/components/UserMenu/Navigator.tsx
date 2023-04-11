import React, { useContext, useState } from 'react';
import LoginContext from '../../context/LoginContext';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserMenu() {
  const {user} = useContext(LoginContext)
  const [isShowing, setIsShowing] = useState(false)
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsShowing(!isShowing)}
      >
        <Ionicons name="person-circle-outline" size={32} color="#fff" />
      </TouchableOpacity>
      {isShowing &&
        <Text>{user}</Text>
      }
    </>
  );
};