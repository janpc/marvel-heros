import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

type MinHeroType ={
  id: number;
  image: string;
  name: string;
  comics: number;
}

type PropsTypes = {
  item: MinHeroType
}

export default function HeroItem({item} : PropsTypes) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:
        item.image}}
        />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <View style={styles.comicsContainer}>
          <Text style={styles.comics}>
            {item.comics}
          </Text>
          <Ionicons
            name="book-outline"
            size={24}
            color="#000"
          />
        </View>
      </View>
    </View>
  );
};