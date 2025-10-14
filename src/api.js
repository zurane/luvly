
import axios from 'axios';

const fetchNews = async (category) => {
    if (!category) {
        throw new Error('Category is required');
    }
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    console.log(`Fetching ${category} news...`);
    const currentDate = new Date().toISOString().split('T')[0];
    console.log('Current date:', currentDate); // Get current date in YYYY-MM-DD format    
    try {
        // API 
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&pageSize=15&domains=wired.com,businessinsider.com,cbsnews.com,bbcnews.com,npr.com&sortBy=punlishedAt&apiKey=${apiKey}`);
        return response.data.articles;
    } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
        return [];
    }
};

export default fetchNews;
