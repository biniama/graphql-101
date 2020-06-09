const lifts = require('./data/lifts.json');
const trails = require('./data/trails.json');

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'hello world'
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen()
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    });