import {ApisauceInstance, create} from 'apisauce';
import { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from '@env'
import MD5  from 'crypto-js/md5'

type MarvelHeroesListResponse = {
  "code": number,
  "status": "string",
  "copyright": "string",
  "attributionText": "string",
  "attributionHTML": "string",
  "data": {
    "offset": number,
    "limit": number,
    "total": "int",
    "count": "int",
    "results": [
      {
        "id": "int",
        "name": "string",
        "description": "string",
        "modified": Date,
        "resourceURI": "string",
        "urls": [
          {
            "type": "string",
            "url": "string"
          }
        ],
        "thumbnail": {
          "path": "string",
          "extension": "string"
        },
        "comics": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "stories": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "type": "string"
            }
          ]
        },
        "events": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "series": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        }
      }
    ]
  },
  "etag": "string"
};

type MarvelHeroDetailsResponse= {
  "code": number,
  "status": string,
  "copyright": string,
  "attributionText": string,
  "attributionHTML": string,
  "data": {
    "offset": number,
    "limit": number,
    "total": number,
    "count": number,
    "results": [
      {
        "id": number,
        "name": string,
        "description": string,
        "modified": Date,
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
    ]
  },
  "etag": string
}

type MarvelHeroComicsListResponse = {
    "code": number,
    "status": string,
    "copyright": string,
    "attributionText": string,
    "attributionHTML": string,
    "data": {
      "offset": number,
      "limit": number,
      "total": number,
      "count": number,
      "results": [
        {
          "id": number,
          "digitalId": number,
          "title": string,
          "issueNumber": number,
          "variantDescription": string,
          "description": string,
          "modified": Date,
          "isbn": string,
          "upc": string,
          "diamondCode": string,
          "ean": string,
          "issn": string,
          "format": string,
          "pageCount": number,
          "textObjects": [
            {
              "type": string,
              "language": string,
              "text": string
            }
          ],
          "resourceURI": string,
          "urls": [
            {
              "type": string,
              "url": string
            }
          ],
          "series": {
            "resourceURI": string,
            "name": string
          },
          "variants": [
            {
              "resourceURI": string,
              "name": string
            }
          ],
          "collections": [
            {
              "resourceURI": string,
              "name": string
            }
          ],
          "collectedIssues": [
            {
              "resourceURI": string,
              "name": string
            }
          ],
          "dates": [
            {
              "type": string,
              "date": Date
            }
          ],
          "prices": [
            {
              "type": string,
              "price": number
            }
          ],
          "thumbnail": {
            "path": string,
            "extension": string
          },
          "images": [
            {
              "path": string,
              "extension": string
            }
          ],
          "creators": {
            "available": number,
            "returned": number,
            "collectionURI": string,
            "items": [
              {
                "resourceURI": string,
                "name": string,
                "role": string
              }
            ]
          },
          "characters": {
            "available": number,
            "returned": number,
            "collectionURI": string,
            "items": [
              {
                "resourceURI": string,
                "name": string,
                "role": string
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
          }
        }
      ]
    },
    "etag": string
};

type MarvelResponse =
  MarvelHeroesListResponse |
  MarvelHeroComicsListResponse |
  MarvelHeroDetailsResponse;


type ProxyHandler<T, P extends string> = {
  get?(target: T, p: P, receiver: any): any;
  set?(
    target: {results: {[key in P]?: T}},
    p: P,
    value: any,
    receiver: any,
  ): boolean;
};

declare const Proxy: {
  new <T extends object>(
    target: {results: {[key in string]?: T}; apiInstance: ApisauceInstance},
    handler: ProxyHandler<T, string>,
  ): {[key: string]: Promise<T>};
};

const marvelProxy = new Proxy<MarvelResponse>(
  {apiInstance: createApi(), results: {}},
  {
    get: function <T extends MarvelResponse>(
      target: {
        results: {
          [key in string]?: T;
        };
      },
      url: string,
    ) {
      const values = target;

      return new Promise<T>(async (resolve, reject) => {
        if (values.results.hasOwnProperty(url)) {
          resolve(values.results[url] as T);
          return;
        }

        try {
          const response = await (target as {
            results: {
              [key in string]?: T;
            };
            apiInstance: ApisauceInstance;
          }).apiInstance.get<T>(url);
          const data = response.data;

          if (data.code !== 200 || !data) {
            throw new Error('Error fetching data');
          }

          (target as {
            results: {
              [key in string]?: T;
            };
          }).results[url] = data;

          resolve(data?.data);
        } catch (e) {
          reject(e);
        }
      });
    },
    set: (target, url: string, value) => {
      target.results[url] = value;
      return true;
    },
  },
);

function createApi (): ApisauceInstance {
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

  return api;
}

export const getNavigatableUrl = (url: string, maxResultsPerPage: number, page: number ): string => {
  //ha cambiado porque con new url no funcionaba bien (añadia / antes de ?)
  return `${url}?limit=${maxResultsPerPage}&offset=${maxResultsPerPage * page}`;
};

export const getCacheData = async (url: string): Promise<any> => {
  try {
    const value = await marvelProxy[url];
    return value;
  } catch (error: any) {
    throw new Error(error);
  }
}
