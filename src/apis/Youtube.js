import axios from 'axios';

const KEY = 'AIzaSyDe-3OwwPIvoHG6S2CFtjzjSQu4T3QrZEQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }
});

