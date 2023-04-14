import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

type ComicType ={
  id: number;
  image: string;
  title: string;
}

type PropsTypes = {
  item: ComicType,
}

export default function ComicItem({item} : PropsTypes) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:
        item.image}}
      />
      <Text style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};