import axios from 'axios';
const KEY = 'AIzaSyCn18leDcqNbzZ3EAJrLfQlRXkpyxMzT80';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});

// youtube.get('/search')