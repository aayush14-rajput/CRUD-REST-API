const express=require('express')
const router=express.Router()
const empController=require('../controller/empController')

router.post('/',empController.createEmp)
router.get('/',empController.findEmployee)
router.put('/:id',empController.updateEmployee)
router.delete('/id',empController.deleteEmployee)

module.exports=router