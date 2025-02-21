import { TMDB_READ_ACCESS_TOKEN, TMDB_BASE_URL } from "utils/config";

export async function fetchTMDB(endpoint) {
    const response = await fetch(TMDB_BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TMDB_READ_ACCESS_TOKEN}`
        }
    });

    let data = await response.json()

    return data.results || data;

}