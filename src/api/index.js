import config from './config'

const { apiKey } = config

const URL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:changeCountry&api_key="+apiKey+"&format=json"


export default function getArtists(country){
    const url = URL.replace(':changeCountry', country)

    console.log(url)
    // fetch que trae el navegador
    return fetch(url)
        .then( res => res.json() )
        .then( res => res.topartists.artist )
}