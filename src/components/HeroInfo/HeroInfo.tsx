import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';


type Props ={
  image: string;
  name: string;
  description: string;
}

export default function HeroInfo({image, name, description }: Props) {


  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{uri: image}}
      >
        <LinearGradient style={styles.titleBackground} colors={['#f0131e00', '#f0131e']}>
          <Text style={styles.title}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
      {description.length ? <Text style={styles.description}>{description}</Text> : <Text style={styles.description}>No info.</Text>}
    </View>
  );
};