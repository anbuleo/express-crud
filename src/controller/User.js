import userModel from "../modals/User.js"

const getAllUsers = async(req,res)=>{
   try {
    let user = await userModel.find()
    res.status(200).send({
        message : "user Created",
        count : user.length,
        user,
       
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).send({
        message : 'internel server error',
        error : error.message
    })
   }
}
const create= async(req,res)=>{
        try {
            let user = await userModel.findOne({email:req.body.email})
            if(!user){
            await userModel.create(req.body)
            res.status(201).send({
                message : "the user created sucess"
            })
           
        }
        else{
            res.status(400).send({
                message : `The email ${req.body.email} is already taken`
            })
        }
            
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message : 'internel server error',
                error : error.message 
            })
        }
}
const getUserById =async(req,res)=>{
    try {
        // let id = Number(req.params.id)
        // console.log(id)
        let user = await userModel.findOne({_id : req.params.id})  /*let user = await userModel.find()*/
        
        res.status(200).send({
            message : 'The get the user sucess',
           user /*user : user[id] */
        })
        // await userModel.create(req.body[id])
        // res.status(201).send({
        //     message : "the user created"
        // })
        console.log(user[id])
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message : 'internel server error',
            error : error.message
        })
    }
}
const editUser = async(req,res)=>{
    try {

        let user = await userModel.findOne({_id : req.params.id})
        if(user){
            let {firstName,lastName,email,password,role,status} = req.body

            user.firstName = firstName ? firstName : user.firstName
            user.lastName = lastName ? lastName : user.lastName
            user.email = email ? email : user.email 
            user.password = password ? password : user.password
            user.role = role ? role : user.role
            user.status = status ? status : user.status

            await user.save()

            res.status(200).send({
                message : "The data feched success",
                user          
            })           

        }else{
            res.status(400).send({
                message : "Invalid user"
            })

        }        

    } catch (error) {
        console.log(error)
            res.status(500).send({
                message : 'internel server error',
                error : error.message
            })
    }
}
const deleteUserById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id : req.params.id})
        if(user){
            await userModel.deleteOne({_id : req.params.id})

            res.status(200).send({message:"The user id deleted successfully"})
        }
        else{
            res.status(400).send({
                message : "Invalid user"
            })
        }
        
    } catch (error) {

         console.log(error)
            res.status(500).send({
                message : 'internel server error',
                error : error.message
            })
    }

}
export default {getAllUsers,create,editUser,getUserById,deleteUserById}