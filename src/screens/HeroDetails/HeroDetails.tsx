import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getHero } from '../../utils/api';
import styles from './styles';
import ComicsList from '../../components/ComicsList';

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
      <ComicsList item={heroDetails} />
    </View>
  );
};