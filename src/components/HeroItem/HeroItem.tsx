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
  item: MinHeroType,
  navigation: any
}

export default function HeroItem({item, navigation} : PropsTypes) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('HeroDetails', {id: item.id})}>
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
    </TouchableOpacity>
  );
};