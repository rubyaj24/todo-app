import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rockaj672:todoapp2024@cluster0.fmu6da0.mongodb.net/todo-app');
    console.log("DB Connected");
}