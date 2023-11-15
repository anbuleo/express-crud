import  express  from 'express'
import couponRouter from './src/routes/Coupons.js'
import userRouter from './src/routes/User.js'
import dotenv from 'dotenv'

dotenv.config()
 const app = express()
 app.use(express.json())
 const PORT = process.env.PORT
 app.use('/',couponRouter) // utilisation of imported componets
 app.use('/',userRouter)

//  let coupons = [
//     {
//         name:'winter cold',
//         startDate : '2023-12-1',
//         expiryDate : '-2024-1-1',
//         code: "WTR-CLD",
//         offerValue: 100,
//         discount : 10,
//         status : false

//     },
//     {
//         name:'Pre Winter',
//         startDate : '2023-10-1',
//         expiryDate : '-2024-11-1',
//         code: "PREWTR-CLD",
//         offerValue: 80,
//         discount : 8,
//         status : true

//     }
//  ]
 app.get('/',(req,res)=>{
    res.status(200).send(`<h1>The express app is listening to port 8000</h1>`)
 })

//  app.get('/coupons',(req,res)=>{
//     res.status(200).send({
//         message: 'All the data are fetched successfully',
//         count : coupons.length,
//         coupons
//     })
//  })

 // Get coupon by its id

//  app.get('/coupons/:id',(req,res)=>{
//     let id = Number(req.params.id)
//     if(id !=NaN && id<coupons.length  ){
//         res.status(200).send({
//             message : 'The data fetched success',
//             coupons: coupons[id]
//         })
//     }
//     else{
//         res.send({
//             message:'Invalid Id'
//         })
//     }
   
//  })

 //Create data by post method


//  app.post('/coupons',(req,res)=>{
//     let data = req.body
//     let FilteredData = coupons.filter((e)=>e.code === data.code)
//     console.log(FilteredData)
//     if(FilteredData.length === 0 ){
//         coupons.push(data)
//         res.status(201).send({
//             message : 'coupon created success full'
//         })
//     }
//     else {
//         res.status(400).send({
//             message : "coupon already taken"
//         })
//     }
//  })
//  app.put('/coupons/:id',(req,res)=>{
//     let id = Number(req.params.id)
//      if(id !=NaN && id < coupons.length){
//         coupons.splice(id,1,req.body)
//         res.status(201).send({
//             message : "Coupons edited success"
//         })
//      }
//      else {
//         res.status(400).send({
//             message : "Invalid Id"
//         })
//      }
//  })
//  app.delete('/coupons/:id',(req,res)=>{
//     let id = Number(req.params.id)
//      if(id !=NaN && id < coupons.length){
//         coupons.splice(id,1)
//         res.status(201).send({
//             message : "Coupons deeleted success"
//         })
//      }
//      else {
//         res.status(400).send({
//             message : "Invalid Id"
//         })
//      }
//  })

 app.listen(PORT,()=>console.log(`The app is start listen port ${PORT}`))

 