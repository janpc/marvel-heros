import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { getHeros } from '../../utils/api';
import HeroItem from '../../components/HeroItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';

type MinHeroType ={
  id: number;
  image: string;
  name: string;
  comics: number;
}

type Props = NativeStackScreenProps<RootStackParamList, "HeroList", 'MyRouter'>;

export default function HeroList({navigation}: Props) {
  const [heroList, setHeroList] = useState<MinHeroType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalHeros, setTotalHeros] = useState<number>(1)

  const getHeroList = async () => {
    if (heroList.length <= totalHeros){
      const {total, list} = await getHeros(page);
      setHeroList([...heroList, ...list]);
      setTotalHeros(total);
      setPage(page + 1);
    }
  }

  useEffect(() => {
    getHeroList();
  }, [])

  if (heroList.length === 0) {
    return <ActivityIndicator style={styles.loading} size="large" color="#f0131e" />
  }
  
  return (
    <>
      <FlatList
        data={heroList}
        renderItem={({item}) => <HeroItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={getHeroList}
        refreshing
      />
    </>
  );
};