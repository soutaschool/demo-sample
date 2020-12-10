import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks"
import Demo from "./Demo";
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

const App = () => {
    return (
        <ApolloProvider client={client} >
            <div className="App">
                <Demo/>
            </div>
        </ApolloProvider>
    );
}

export default App;
