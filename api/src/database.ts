import mongoose, {ConnectionOptions, ConnectOptions} from 'mongoose'

(async () => {
    try {
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db = await mongoose.connect('mongodb://localhost/mern-database', mongooseOptions)
        console.log('Database is connected to:', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}) ()