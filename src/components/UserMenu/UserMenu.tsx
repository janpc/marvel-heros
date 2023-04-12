import React, { useState } from 'react';
import { TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserModal from '../UserModal/UserModal';

export default function UserMenu() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsShowing(true)}
      >
        <Ionicons name="person-circle-outline" size={32} color="#fff" />
      </TouchableOpacity>
      <UserModal visible={isShowing} close={() => setIsShowing(false)}/>
    </>
  );
};