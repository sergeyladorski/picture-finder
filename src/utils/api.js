class Api {
    constructor({baseUrl, accessKey}) {
        this.baseUrl = baseUrl;
        this.accessKey = accessKey;
    }
    search(searchQuery) {
        return fetch(`${this.baseUrl}/search/photos?query=${searchQuery}`, {
            headers: {
                Authorization: `Client-ID ${this.accessKey}`
            }
        })
        .then(res => res.ok? res.json() : Promise.reject(res.status))
    }
}

const config = {
    baseUrl: 'https://api.unsplash.com',
    accessKey: 'H8gh9bhvCQeiUeVQO_-zAUTxVfDCbOAbpb_rt45z50c',
}

const api = new Api(config);
export default api;