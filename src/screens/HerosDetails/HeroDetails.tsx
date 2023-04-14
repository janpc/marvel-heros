import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getHero } from '../../utils/api';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, "HeroDetails", 'MyRouter'>;

type HeroType ={
  id: number;
  image: string;
  name: string;
  description: string;
  comics: number;
}

export default function HeroDetails({route}: Props) {
  const [heroDetails, setHeroDetails] = useState<HeroType>()

  const getDetails = async () => {
    const details = await getHero(route.params.id);
    setHeroDetails(details)

    
  }
  useEffect(() => {
    getDetails()
  }, [])

  if (!heroDetails) {
    return (
    <View style={styles.background}>
      <ActivityIndicator style={styles.loading} size="large" color="#ffffff" />
    </View>)
  }
  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.image}
        source={{uri: heroDetails.image}}
      >
        <LinearGradient style={styles.titleBackground} colors={['#f0131e00', '#f0131e']}>
          <Text style={styles.title}>{heroDetails.name}</Text>
        </LinearGradient>
      </ImageBackground>
      <Text style={styles.description}>{heroDetails.description}</Text>
    </View>
  );
};