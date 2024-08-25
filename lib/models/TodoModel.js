const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true //if description isn't added todo won't be saved
    },
    isCompleted:{
        type:Boolean,
        default:false //whenever todo created it deafult by incompleted
    },
    // timeStamp: {
    //     type: Date,
    //     default: Date.now
    // }
})

const TodoModel = mongoose.models.todo || mongoose.model('todo',Schema) //Model Created and provided schema

export default TodoModel;