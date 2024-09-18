const express = require('express');
const { getJobSheets, createJobSheet, updateJobSheet, deleteJobSheet } = require('../controllers/jobSheetController');
const router = express.Router();

router.route('/').get(getJobSheets).post(createJobSheet);
router.route('/:id').put(updateJobSheet).delete(deleteJobSheet);

module.exports = router;
