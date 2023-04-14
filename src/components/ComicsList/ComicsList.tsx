import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { getComics } from '../../utils/api';
import ComicItem from '../ComicItem/ComicItem';
import HeroInfo from '../HeroInfo/HeroInfo';

type HeroType ={
  id: number;
  image: string;
  name: string;
  description: string;
  comics: number;
}

type PropsTypes = {
  item: HeroType
}

type ComicType ={
  id: number;
  image: string;
  title: string;
}

export default function ComicsList({item} : PropsTypes) {
  const [comicList, setComicList] = useState<ComicType[]>([]);
  const [page, setPage] = useState<number>(0);

  const getComicsList = async () => {
    if (comicList.length <= item.comics){
      const list = await getComics(item.id, page);
      setComicList([...comicList, ...list]);
      setPage(page + 1);
    }
  }

  useEffect(() => {
    getComicsList();
  }, []);

  return (
    <FlatList
      style={styles.comicList}
      data={comicList}
      numColumns={2}
      renderItem={({item}) => <ComicItem item={item}/>}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={getComicsList}
      ListHeaderComponent={
        <HeroInfo
          description={item.description}
          name={item.name}
          image={item.image}
        />}
    />
  );
};