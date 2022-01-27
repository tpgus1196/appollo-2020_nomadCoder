import React from "react";
import {gql, useQuery} from "@apollo/client"; //graphql import
import styled from "styled-components";
import Movie from "../components/Movie";


//query작성: playground의 query부분 복붙
const GET_MOVIES = gql`
  {
    movies{
      id
      medium_cover_image
    }
  }    
`; //이 query는 argument가 있음(id가 필요하기 때문)
  //query에 변수가 없을때 ? 그냥 쿼리를 바로 쓰면 됨

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;


export default () => {
     //useQuery가 없을 때 error 얻기 > useQuery: react hooks 부분
    const {loading, error, data} = useQuery(GET_MOVIES); 
   

    return (
        <Container>
            <Header>
                <Title>Apollo 2020</Title>
                <Subtitle>I love GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            {!loading && data.movies && data.movies.map(m => <Movie key={m.id} id={m.id} />)}
        </Container>
        );

};
//!loading: 로딩이 아닐때
//&& = and
//{!loading && data.movies && ~~}
//!loding = true && data.movies = true일때, ~~를 실행