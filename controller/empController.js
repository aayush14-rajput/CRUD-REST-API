const empSchema=require('../models/employee')

const createEmp=async(req,res)=>{
    
    try{
        const data=new empSchema(req.body)
        const emp= await data.save()
        res.status(201).json(emp)
    
    }catch(error){
    res.status(500).json({error:error.message})
    }
}

 const findEmployee=async(req,res)=>{
    try{
        const findemp= await empSchema.find()
        res.status(200).json(findemp)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const updateemp= await empSchema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updateemp)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteEmployee=async(req,res)=>{
    try{
        const deleteemp=await empSchema.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteemp)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={createEmp,findEmployee,updateEmployee,deleteEmployee}



