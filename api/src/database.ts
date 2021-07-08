import mongoose, {ConnectionOptions, ConnectOptions} from 'mongoose';
import config from './config'

(async () => {
    try {
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}}/${config.MONGODB_DATABASE}`, mongooseOptions)
        console.log('Database is connected to:', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}) ()