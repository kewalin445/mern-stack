const mongose = require('mongoose')
const Schema = mongose.Schema

newSchema = new Schema({
    name: String,
    email: String,
    password: String
})

module.exprots = mongoose.model('User', newSchema);