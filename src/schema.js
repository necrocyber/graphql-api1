import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers"

const typeDefs = `

    type Query  {
        hello: String
        greet(name: String!): String
        task: [Task]
    }
    
    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type Mutation {
        createTask(input: Task)
    }

    type TaskInput {
        title: String!
        description: String!
        number: Int
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})