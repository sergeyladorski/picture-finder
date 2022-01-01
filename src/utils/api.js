class Api {
    constructor({ baseUrl, accessKey }) {
        this._baseUrl = baseUrl;
        this._accessKey = accessKey;
    }
    static getResponse(res) {
        return res.ok
            ? res.json()
            : Promise.reject(`Ошибка: ${res.status}`)
    }

    static transformPhotoData(item) {
        return {
            id: item.id,
            src: item.urls.regular,
            title: item.user.name,
            subtitle: item.description,
            alt: item.alt_description
        }
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/search/photos?query=${searchQuery}`, {
            headers: {
                Authorization: `Client-ID ${this._accessKey}`
            }
        })
            .then(Api.getResponse)
            .then(({ results }) => results.map(Api.transformPhotoData))
    }

    getPhotoById(id) {
        return fetch(`${this._baseUrl}/photos/${id}`, {
            headers: {
                Authorization: `Client-ID ${this._accessKey}`
            }
        })
            .then(Api.getResponse)
            .then(Api.transformPhotoData)
    }
}

const config = {
    baseUrl: 'https://api.unsplash.com',
    accessKey: 'H8gh9bhvCQeiUeVQO_-zAUTxVfDCbOAbpb_rt45z50c',
}

export const api = new Api(config);