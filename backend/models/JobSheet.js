const mongoose = require('mongoose');

const jobSheetSchema = mongoose.Schema({
  jobName: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

const JobSheet = mongoose.model('JobSheet', jobSheetSchema);
module.exports = JobSheet;
