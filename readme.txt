npm init => to intiate the package.json 

npm i express

and create file name index.js because(  "main": "index.js",) file read the default file index.js

to overcome the req (eg.. create , put ,post)  we can call express because in the express already they were written the code in-bulid


import the express

const express = require('express')  // common js  (or) Add "type ": "module" in package.json  (import express from 'express)  this is es-6
 
to create the app

const app = express()  

the get req to create 

app.get('/',(req,res)=>{
    res.send(`<h1>Welome to Express </h1>`)
})

most common server port is 8000

app.listen(8000,()=>console.log("app is listening to 8000"))

Then add script in package.json 
For the default page setup 

"start" : "node index.js"

then we call the command as "npm start"

TO create data and sending by the req what we need by using params

let coupons = [
    {
        name:'winter cold',
        startDate : '2023-12-1',
        expiryDate : '-2024-1-1',
        code: "WTR-CLD",
        offerValue: 100,
        discount : 10,
        status : false

    },
    {
        name:'Pre Winter',
        startDate : '2023-10-1',
        expiryDate : '-2024-11-1',
        code: "PREWTR-CLD",
        offerValue: 80,
        discount : 8,
        status : true

    }
 ]

//To display all the data 

 app.get('/coupons',(req,res)=>{
    res.send({
        message: 'All the data are fetched successfully',
        coupons
    })
 })

 ## To provide the data by req id 

 app.get('/coupons/:id',(req,res)=>{
    // ## get the id by params
    let id = Number(req.params.id)
    // ## Writing a contion avoid unwanted id 
    if(id != NaN && id<coupons.length){
        res.send({
            message : 'The entered id Data fetched Success'
            coupons : coupons[id]
        })
    }
    else {
        res.send({
            message : "Invaild Id"
        })
    }
 })

 // ## Create a data

 To sending data by json method so we want to use 
  
  app.use(express.json()) //=> this line is compulsary 


// To create using post method

  app.post('/coupons',(req,res)=>{
    let newData = req.body  // here what we enter data in postman app body that comes here 
     // we want to filter data
     let filteredData = coupons.filter((e)=> e.code === data.code)

     // checking the similarity using if condition and then allow or reject we want decide
     if( filteredData.length ===0 ){
        coupons.push(data)
        res.status(201).send({
            message : "The data created Success"
        })
     }
     else {
        res.status(400).send({
            message : "The data is already exist"
        })
     }
  })

  app.listen(8000,()=>console.log("The server is listen port 8000"))

  // ## To edit the data by using [put req]

  app.put('/coupons/:id',(req,res)=>{
    let id = Number(req.params.id)            //geting id from req params
    if(id != NaN && id < coupons.length){     //applying the condition to edit or send error message
        coupons.splice(id,1,req.body)
        res.status(200).send({
            message : "The coupon was edited Success"
        })
    }
    else{
        res.status(400).send({
            message : "Invalid Id"
        })
    }
  })

  // to delete the data using delete method

  app.delete('/coupons/:id',(req,res)=>{
    let id = Number(req.params.id)
     if(id !=NaN && id < coupons.length){
        coupons.splice(id,1)
        res.status(201).send({
            message : "Coupons deeleted success"
        })
     }
     else {
        res.status(400).send({
            message : "Invalid Id"
        })
     }
 })


mvc => model view controller