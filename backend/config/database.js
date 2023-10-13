const  mongoose = require('mongoose');


const connectDataBase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        //userCreateIndex: true,
    }).then(con=> {
            console.log(`MongoDB DataBase connected with HOST: ${con.connection.host}`)
    })

}


module.exports = connectDataBase