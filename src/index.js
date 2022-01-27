import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import {ApolloProvider} from "@apollo-react-hooks" > @apollo/client로 병합됨;
import { 
  ApolloProvider, 
  InMemoryCache,
  ApolloClient,
  useQuery,
  gql
} from '@apollo/client';
import client from "./routes/apollo"; //client는 apollo.js에서 만들어 둔 것


ReactDOM.render( 
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

