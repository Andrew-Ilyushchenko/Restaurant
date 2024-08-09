export const getBlogs = async () => {
    const responseJSON = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-30&sortBy=publishedAt&apiKey=596da4d2fbb846d683b8035b6f2d925d');
    const response = await responseJSON.json();
    return response;
}