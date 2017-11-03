import config from './config'

const { apiKey } = config

const URL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key="+apiKey+"&format=json"


export default function getArtists(){
    
    // fetch que trae el navegador
    return fetch(URL)
        .then( res => res.json() )
        .then( res => res.topartists.artist )
}