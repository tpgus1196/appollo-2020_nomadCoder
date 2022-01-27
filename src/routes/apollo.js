//apollo-boost, apollo/react-hooks는 '@apollo/client'로 병합됨
//따라서 npm i @apollo/client

import { ApolloClient, InMemoryCache } from "@apollo/client";

//ApolloClient 를 실행
//생성자(constructor)
const client = new ApolloClient({
    //grphql에서는 url 갖지 않음 > 동일한 url 반복 붙여넣기 안해도 됨
    // uri: "https://movieql.now.sh/" //더 이상 지원 안함

    //graphql api강의에서 만든 서버 
        //없을 때 임시 uri:
        //https://graphql-movie-api-2021.herokuapp.com
        //https://movieql2.vercel.app
    uri:"http://localhost:4000/",
    cache:new InMemoryCache(),
});

export default client;