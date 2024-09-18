import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditJobSheet = () => {
  const { id } = useParams();
  const [jobName, setJobName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();

  // Fetch the job sheet data to prefill the form
  useEffect(() => {
    const fetchJobSheet = async () => {
      const { data } = await axios.get(`/api/jobsheets/${id}`);
      setJobName(data.jobName);
      setDescription(data.description);
      setStatus(data.status);
    };
    fetchJobSheet();
  }, [id]);

  // Handle form submission to update the job sheet
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/jobsheets/${id}`, { jobName, description, status });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Edit Job Sheet</h1>
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
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update Job Sheet</button>
      </form>
    </div>
  );
};

export default EditJobSheet;
