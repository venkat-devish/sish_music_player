export const recommendedOptions = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'

    }
};

export const globalChartsOptions = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
    headers: {
        'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'

    }
};

export function getSearchOptions(query: string) {
    return {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
        params: { q: query, per_page: '10', page: '1' },
        headers: {
            'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    }
}

export function getAlbumsOptions(id: number) {
    return {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/artist/albums/',
        params: { id, per_page: '20', page: '1' },
        headers: {
            'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    }
}

export function getArtistAlbums(id: number) {
    return {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/artist/albums/',
        params: { id, per_page: '30', page: '1' },
        headers: {
            'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    }
}

export const getPodcastsOptions = {
    method: 'GET',
    url: 'https://podcast-api1.p.rapidapi.com/top_channels/v2',
    params: { category_id: '10030', country: 'us' },
    headers: {
        'X-RapidAPI-Key': ' [ YOUR - KEY ] ',
        'X-RapidAPI-Host': 'podcast-api1.p.rapidapi.com'
    }

}
