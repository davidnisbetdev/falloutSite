import { db, Table } from './dbConfig.js'

// CREATE or UPDATE Vault
const createOrUpdate = async (data = {}) => {
    const params = {
        TableName: Table,
        Item: data
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(err){
        return { success: false }
    }
}

// READ all Vaults

const getAllVaults = async() => {
    const params = {
        TableName: Table
    }

    try {
      const { Items = [] } = await db.scan(params).promise()
      return { success: true, data: Items};
    } catch (err) {
      return { success: false };
    }
}

// READ Vaults by ID

const getVaultById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } = await db.get(params).promise()
        return { success: true, data: Item }
    } catch (err) {
        return { success: false, data: null}
    }
}

// Delete Vault by ID

const deleteVaultById = async(value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        await db.delete(params).promise()
        return{ success: true }
    } catch (err) {
        return{ success: false }
    }
}

export {
    createOrUpdate,
    getAllVaults,
    getVaultById,
    deleteVaultById
}