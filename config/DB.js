const DB_PORT = process.env.DB_PORT
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PWD = process.env.DB_NAME

module.exports = {
    conStr : "mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME,
    prod: "mongodb+srv://dagen:"+ DB_PWD  +"@todo-list.yqi65.mongodb.net/"+ DB_NAME +"?retryWrites=true&w=majority"
} 
    
