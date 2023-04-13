import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

type PropsTypes = {
  visible: boolean | undefined;
  close(): void;
}

export default function UserModal({visible, close} : PropsTypes) {
  const {user, logout} = useContext(LoginContext);

  const closeAndLogout = () => {
    close();
    logout();
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPress={close}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Ionicons name="person-circle-outline" size={100} color="#555" />
            <Text style={styles.modalText}>{user.name}</Text>
            <Text style={styles.modalText}>{user.email}</Text>
            <TouchableOpacity
              onPress={closeAndLogout}
              style={styles.logout}
            >
              <Ionicons name="log-out-outline" size={36} color="#E23636" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity>
  </Modal>
  );
};