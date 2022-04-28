const express = require('express');

const { repairExists } = require('../middlewares/repairs.middlewares');

const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairs.controller');

const router = express.Router();

router.route('/').get(getAllRepairs).post(createRepair);

router
  .use('/:id', repairExists)
  .route('/:id')
  .get(getRepairById)
  .patch(updateRepair)
  .delete(deleteRepair);

module.exports = { repairsRouter: router };