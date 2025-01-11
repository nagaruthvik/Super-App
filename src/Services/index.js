import axios from "axios";
import { Await } from "react-router-dom";


async function getNews(){
    try{
        const news = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
        return news.data.articles
    }
    catch(error){
        throw new Error(error)
    }
}


export const getGenres = async()=>{
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {language: 'en'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThlZDQ4NDI1ODk0OTJmZDUxYTQzYTIzYTk5ZDAzMSIsIm5iZiI6MTczNjQzMTQzMS4wMTYsInN1YiI6IjY3N2ZkNzQ3ZTBkNTY0OTNlNGJiMzVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1reihMEFUxEHQh6UbOEUfBkCIA4NWnTrlEv-mPRG7jk'
        }
      };
      
    const res = await axios
        .request(options)
        .then(res => res.data)
        .catch(err => console.error(err));
    return res
}
export const getMovies = async(genre)=>{
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: '1',with_genre : genre},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThlZDQ4NDI1ODk0OTJmZDUxYTQzYTIzYTk5ZDAzMSIsIm5iZiI6MTczNjQzMTQzMS4wMTYsInN1YiI6IjY3N2ZkNzQ3ZTBkNTY0OTNlNGJiMzVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1reihMEFUxEHQh6UbOEUfBkCIA4NWnTrlEv-mPRG7jk'
        }
    };
    const res = await axios
        .request(options)
        .then(res => res.data)
        .catch(err => console.error(err));
    return res

    
}

export default getNews;

