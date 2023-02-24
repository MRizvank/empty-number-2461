const express=require('express')
require('dotenv').config()
const connection=require('./config/db')
const userRoutes=require('./routes/user.routes')
const productRoutes=require('./routes/product.routes')

const app=express()

app.use(express.json())

app.use('/user',userRoutes)
app.use('/product',productRoutes)

app.get('/',(req,res)=>{
    res.send("home page")
})


app.listen(process.env.SERVER_PORT,async()=>{
    try {
        await connection
        console.log('connected to db')
        console.log(`server is running at server http://localhost:${process.env.SERVER_PORT}`)
    } catch (error) {
        console.log('cannot connect to db',error.message)
    }
   
})