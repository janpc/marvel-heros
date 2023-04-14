import { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from '@env'
import { create } from 'apisauce'
import MD5  from 'crypto-js/md5'

type FullHero = {
  "id": number,
  "name": string,
  "description": string,
  "modified": "Date",
  "resourceURI": string,
  "urls": [
    {
      "type": string,
      "url": string
    }
  ],
  "thumbnail": {
    "path": string,
    "extension": string
  },
  "comics": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": [
      {
        "resourceURI": string,
        "name": string
      }
    ]
  },
  "stories": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": [
      {
        "resourceURI": string,
        "name": string,
        "type": string
      }
    ]
  },
  "events": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": [
      {
        "resourceURI": string,
        "name": string
      }
    ]
  },
  "series": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": [
      {
        "resourceURI": string,
        "name": string
      }
    ]
  }
}

type FullComic = {
  "id": number,
  "title": string,
  "description": string,
  "thumbnail": {
    "path": string,
    "extension": string
  },
}

type HeroType ={
  id: number;
  image: string;
  name: string;
  description: string;
  comics: number;
}

type ComicType ={
  id: number;
  image: string;
  title: string;
}

const ts = new Date().getTime().toString();
const hash = MD5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).toString()

const api = create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  headers: { Accept: '*/*' },
  params: {
    "apikey": MARVEL_PUBLIC_KEY,
    "ts": ts,
    "hash": hash
  }
})

export const getHeros = async (page: number): Promise<{list: HeroType[], total: number}> => {
  const res = await api.get(`/characters?limit=20&offset=${20 * page}`);
  const resultsNormalized = res.data.data.results.map((hero: FullHero ) => normalizeHero(hero))

  return {list: resultsNormalized, total: res.data.data.total};
}

export const getHero = async (id: number): Promise<HeroType> => {
  const res = await api.get(`/characters/${id}`);
  const hero = normalizeHero(res.data.data.results[0])

  return hero;
}

const normalizeHero = (hero: FullHero): HeroType => {
  const heroNormalized = {
    id: hero.id,
    name: hero.name,
    comics: hero.comics.available,
    image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
    description: hero.description
  }

  return heroNormalized;
}

export const getComics = async (id: number, page: number): Promise<ComicType[]> => {
  const res = await api.get(`/characters/${id}/comics?limit=20&offset=${20 * page}`);
  const resultsNormalized = res.data.data.results.map((comic: FullComic ) => normalizeComic(comic))

  return resultsNormalized;
}

const normalizeComic = (comic: FullComic): ComicType => {
  const comicNormalized = {
    id: comic.id,
    title: comic.title,
    image: comic.thumbnail.path + '.' + comic.thumbnail.extension,
  }

  return comicNormalized;
}