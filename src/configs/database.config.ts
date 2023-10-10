import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect("mongodb+srv://tempuser:Abcd1234@cluster0.8lkqp.mongodb.net/foodmine?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}