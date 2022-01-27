import React from "react";
import {gql, useQuery} from "@apollo/client"; //graphql import



//query작성
const GET_MOVIES = gql`
  {
    movies{
      id
      medium_cover_image
    }
  }    
`;//playground의 query부분 복붙

export default () => {
    const {loading, error, data} = useQuery(GET_MOVIES); 
    //useQuery가 없을 때 error 얻기 > useQuery: react hooks 부분

    console.log(loading, error, data);
        //console 확인 > 
        //loading: true 먼저 뜨고 false로 바뀐다
        //error: undefined
        //data: movies 배열이 나옴
    if(loading){
        return "loading..."
    }
    if(data && data.movies){
        return data.movies.map(m => <h1>{m.id}</h1>);
        //화면에 movie id 띄움
    }
    return <h1>Home</h1>;
};