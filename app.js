const express=require('express')
const path=require('path')
const parser=require('body-parser')
const app=express()
app.use(parser.urlencoded({extended:true}))
app.get('/',(req,res,next)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'views','signup.html'))
})
app.post('/sign',(req,res,next)=>{
    console.log(req.body)
   
})
app.listen('3000',()=>{
    console.log('done')
})