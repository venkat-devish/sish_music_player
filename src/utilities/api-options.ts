export const recommendedOptions = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: [KEY], locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': [KEY],
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};