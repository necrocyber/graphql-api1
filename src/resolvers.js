import { task } from './task'

import User from './models/Users'

export const resolvers = {
    Query : {
        hello : () => {
            return "Hello World with GraphQl"
        },
        greet(root, args, ctx) {
            console.log(ctx)
            console.log(args.name)
            return `Hello ${args.name}`
        },
        task() {
            return task
        },
        async Users() {
            const Users = await User.find()
            return Users
        }
    }, 
    Mutation : {
        createTask(_, { input }) {
            input._id = task.length
            task.push(input)
            return input
        },
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save()
            return newUser
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id)
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {new: true})
        }
        
    }
}