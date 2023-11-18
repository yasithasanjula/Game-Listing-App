import axios from 'axios';

const key="dfb6e45df2314199a627dbdbd4ad700a";
const axiosCreate=axios.create({
    baseURL:'https://rawg.io/@yasithasanjula/apikey'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}