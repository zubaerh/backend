import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect("mongodb+srv://zubbaerhossain:q4ppCYKcV1nHTLJN@cluster0.x8t1y1j.mongodb.net/foodmine?retryWrites=true&w=majority&appName=AtlasApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}