
import axios from 'axios';
import 'dotenv/config';

export const fetchTechnologyNews = async () => {
    const apiKey = import.meta.env.API_KEY;
    console.log('API Key:', apiKey);
    console.log('Fetching technology news...');
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching technology news:', error);
        return [];
    }
};

