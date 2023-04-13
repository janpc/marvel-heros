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

type MinHeroType ={
  id: number;
  image: string;
  name: string;
  comics: number;
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

export const  getHeros = async (page: number): Promise<MinHeroType[]> => {
  const res = await api.get(`/characters?limit=20&offset=${20 * page}`);
  const resultsNormalized = res.data.data.results.map((hero: FullHero ) => normalizeHero(hero))

  return resultsNormalized;
}

const normalizeHero = (hero: FullHero): MinHeroType => {
  const heroNormalized = {
    id: hero.id,
    name: hero.name,
    comics: hero.comics.available,
    image: hero.thumbnail.path + '.' + hero.thumbnail.extension
  }

  return heroNormalized;
}