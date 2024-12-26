const express= require('express')
const app= express()

app.get('/',(req,res)=>{
    res.json({
       mesg:'Hello  Mohamed Ashrif How are u', 
    //    mesg:'Hi'
    })
})

app.listen(3000)