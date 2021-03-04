const db = require('../../data/db-config');

const getAll = async () => {
    return await db('appointments');
};
  
const getById = async (id) => {
    return db('appointment').where('appointment_id', id).first().select('*');
};

const create = async (data) => {
    return db('appointment').insert(data).returning('*');
};

const update = async (id, data) => {
    return db('appointment').where('appointment_id', id).first().update(data).returning('*');
};

const remove = async (id) => {
    return db('appointment').where('appointment_id', id).del();
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
