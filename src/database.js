import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost/mongographql", {
            useNewUrlParser: true
        })

        console.log(">>> MongoDb is connect");
    } catch(e) {
        console.log("Server error")
        console.log(e)
    }
}

