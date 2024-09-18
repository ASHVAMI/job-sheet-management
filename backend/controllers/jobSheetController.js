const JobSheet = require('../models/JobSheet');

// Get all job sheets
const getJobSheets = async (req, res) => {
  const jobSheets = await JobSheet.find({});
  res.json(jobSheets);
};

// Create new job sheet
const createJobSheet = async (req, res) => {
  const { jobName, description } = req.body;
  const jobSheet = new JobSheet({ jobName, description });
  const createdJobSheet = await jobSheet.save();
  res.status(201).json(createdJobSheet);
};

// Update job sheet
const updateJobSheet = async (req, res) => {
  const jobSheet = await JobSheet.findById(req.params.id);
  if (jobSheet) {
    jobSheet.jobName = req.body.jobName || jobSheet.jobName;
    jobSheet.description = req.body.description || jobSheet.description;
    jobSheet.status = req.body.status || jobSheet.status;

    const updatedJobSheet = await jobSheet.save();
    res.json(updatedJobSheet);
  } else {
    res.status(404);
    throw new Error('Job sheet not found');
  }
};

// Delete job sheet
const deleteJobSheet = async (req, res) => {
  const jobSheet = await JobSheet.findById(req.params.id);
  if (jobSheet) {
    await jobSheet.remove();
    res.json({ message: 'Job sheet removed' });
  } else {
    res.status(404);
    throw new Error('Job sheet not found');
  }
};

module.exports = { getJobSheets, createJobSheet, updateJobSheet, deleteJobSheet };
