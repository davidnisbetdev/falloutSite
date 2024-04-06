import express from 'express'
import { createOrUpdate, deleteVaultById, getVaultById, readAllVaults } from './db.js'

// GET vaults
Router.get('/vaults', async(req,res) => {
    const {success, data } = await readAllVaults()

    if (success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, message: "Error"})
})

