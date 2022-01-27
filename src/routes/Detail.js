import { useQuery,gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query getMovie($id:Int!){
        movie(id: $id) {
            title
            medium_cover_image
            language
            rating
            description_intro
        }
    }    
`;//쿼리에 변수가 있을때(ex. id): query가 원하는 변수 구체적으로 적기(쿼리 이름 적기)
        //query getMovie($id:Int!) > Apollo가 변수 type 검사하도록 도움
            //!는 필수 의미. id가 꼭 필요함!
        //movie(id: $id) > 변수를 실제 query에게 주는 작업 
        //movie(id: $id) 이하 쿼리는 sever로 간다
        //$id는 변수(임의의 여러 id값이 될 수 있다?)


export default () => {
    const {id} =useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
        });
    if (loading){
        return "loading"
    }
    if (data && data.movie){ //이 movie는 상부 GET_MOVIE의 movie에 해당
        return data.movie.title;
    }
        
    console.log(loading, data);
    return "Detail"
};