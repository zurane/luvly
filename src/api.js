
import axios from 'axios';

const fetchTechnologyNews = async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    console.log('Fetching technology news...');
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&pageSize=15&domains=theverge.com,wired.com&apiKey=${apiKey}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching technology news:', error);
        return [];
    }
};

export default fetchTechnologyNews;
