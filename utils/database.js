import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('Mongo is already connected');
        return;
    }
    try {
        await mongoose.connect('mongodb+srv://muneebafzal381a:bKdDCvazDy7bduKI@cluster0.g8x7jtt.mongodb.net/?retryWrites=true&w=majority',{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('Mongodb Connected')
    } catch (error) {
        console.log(error);
    }
}