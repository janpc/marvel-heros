import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { getHeros } from '../../utils/api';
import HeroItem from '../../components/HeroItem';

type MinHeroType ={
  id: number;
  image: string;
  name: string;
  comics: number;
}

export default function HeroList() {
  const [list, setList] = useState<MinHeroType[]>([]);
  const [page, setPage] = useState<number>(0)

  const getHeroList = async () => {
    const heroList = await getHeros(page);
    setList([...list, ...heroList]);
    setPage(page + 1);
  }

  useEffect(() => {
    getHeroList();
  }, [])
  
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <HeroItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={getHeroList}
      refreshing
    />
  );
};