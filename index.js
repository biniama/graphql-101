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

    enum TrailStatus {
        OPEN
        CLOSED
    }

    type Trail {
        name: String!
        lift: [String!]!
        difficulty: String!
        status: TrailStatus!
        gromed: Boolean!
        snowmaking: Boolean!
        trees: Boolean!
        night: Boolean!
        id: ID!
    }

    type Query {
        allLifts: [Lift!]!
        liftCount: Int!
        findLiftById(id: ID!): Lift!
        allTrails: [Trail!]!
        findTrailById(id: ID!): Trail!
        trailCount(status: TrailStatus): Int!
    }
`

const resolvers = {
    Query: {
        allLifts: () => lifts,
        liftCount: () => lifts.length,
        // args is anything that is coming from the user
        // parent is the entire data object where we are operating such as Lift or Trail
        // parent aka root or object or _
        findLiftById: (parent, args) => lifts.find(lift => args.id === lift.id),
        allTrails: () => trails,
        findTrailById: (parent, args) => trails.find(trail => args.id === trail.id),
        trailCount: (parent, args) =>
            !args.status
                ? trails.length
                : trails.filter(trail => args.status === trail.status).length,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen()
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    });