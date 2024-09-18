import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewJobSheet = () => {
  const [jobName, setJobName] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  // Handle form submission to create a new job sheet
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/jobsheets', { jobName, description });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Create New Job Sheet</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Name</label>
          <input
            type="text"
            className="form-control"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Job Sheet</button>
      </form>
    </div>
  );
};

export default NewJobSheet;
