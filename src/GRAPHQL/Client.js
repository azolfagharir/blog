import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const api = import.meta.env.VITE_API_URL;

const client = new ApolloClient({
     link: new HttpLink({uri:api}),
    cache : new InMemoryCache(),
});


export default client;

