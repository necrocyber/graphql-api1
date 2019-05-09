import { task } from './task'

export const resolvers = {
    Query : {
        hello : () => {
            return "Hello World with GraphQl"
        },
        greet(root, args) {
            console.log(args.name)
            return `Hello ${args.name}`
        },
        task() {
            return task
        }
    }
}