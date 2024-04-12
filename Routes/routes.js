import express from 'express'
import { createOrUpdate, deleteVaultById, getVaultById, getAllVaults } from '../config/db.js'

const router = express.Router()

// GET vaults
router.get('/vault', async(req,res) => {
    const {success, data } = await getAllVaults()

    if (success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, message: "Error"})
})

// GET vaults by id

router.get('/vault/:id', async(req, res) => {
    const { id } = req.params
    const { success, data } = await getVaultById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }
})


// Create Vault
router.post('/vault', async(req, res) => {
    const { success, data } = await createOrUpdate(req.body)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: 'Error'})
})


// Update vault by ID
router.put('/vault/:id', async(req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdate(user)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete Vault by Id
router.delete('/vault/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteVaultById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



export default router