import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [jobSheets, setJobSheets] = useState([]);

  // Fetch job sheets from the backend
  useEffect(() => {
    const fetchJobSheets = async () => {
      const { data } = await axios.get('/api/jobsheets');
      setJobSheets(data);
    };
    fetchJobSheets();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Job Sheets</h1>
      <Link to="/new" className="btn btn-primary mb-4">Create New Job Sheet</Link>
      <div className="job-sheet-list">
        {jobSheets.length > 0 ? (
          jobSheets.map((jobSheet) => (
            <div key={jobSheet._id} className="job-sheet-card">
              <Link to={`/jobsheet/${jobSheet._id}`}>
                <h2 className="text-xl">{jobSheet.jobName}</h2>
                <p>{jobSheet.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No job sheets found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
