import axios from 'axios'

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const searchImg = async (search, currentPage) => {
    try {
        const response = await axios.get("", {
            params: {
                client_id: "IsrfhvqbRkVjtUaZbmbOJhUkl5q7-L7tAt14Hn0jZa0",
                query : search,
                page : currentPage,
                per_page: 12,
            },
        });
        return response.data.results;
    }
    catch (error) {
        throw new Error();

    }
}