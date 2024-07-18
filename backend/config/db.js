import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://lethanhkhoi01:donghodienb09@cluster0.2novm1b.mongodb.net/cuisine-corner').then(()=>console.log('DB Connected'))
}