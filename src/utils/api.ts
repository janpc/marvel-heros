import { getCacheData, getNavigatableUrl } from './ProxyProvider'

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

export const getHeros = async (page: number): Promise<{list: HeroType[], total: number}> => {
  const url = getNavigatableUrl('/characters', 20, page);
  const data = await getCacheData(url);
  const dataultsNormalized = data.results.map((hero: FullHero ) => normalizeHero(hero))

  return {list: dataultsNormalized, total: data.total};
}

export const getHero = async (id: number): Promise<HeroType> => {
  const url = getNavigatableUrl(`/characters/${id}`, 1, 0);
  const data = await getCacheData(url);
  const hero = normalizeHero(data.results[0])

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
  const url = getNavigatableUrl(`/characters/${id}/comics`, 20, page);
  const data = await getCacheData(url);
  const resultsNormalized = data.results.map((comic: FullComic ) => normalizeComic(comic))

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