const lifts = require('./data/lifts.json');
const trails = require('./data/trails.json');

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Lift {
        id: ID!
        name: String!
        capacity: Int!
        night: Boolean!
        elevationGain: Int!
    }

    type Query {
        allLifts: [Lift!]!
        liftCount: Int!
        findLiftById(id: ID!): Lift!
    }
`

const resolvers = {
    Query: {
        allLifts: () => lifts,
        liftCount: () => lifts.length,
        findLiftById: (parent, args) => lifts.find(lift => args.id === lift.id)
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen()
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    });