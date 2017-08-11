class FetchApi {
    static getData(url) {
        return fetch(url).then((data) => data.json());
    }
    static putData(url, data) {
        return fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            method: 'put',
            body: JSON.stringify(data),
        });
    }
}

export default FetchApi;
