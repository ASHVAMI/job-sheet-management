import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [jobSheets, setJobSheets] = useState([]);

  useEffect(() => {
    const fetchJobSheets = async () => {
      const { data } = await axios.get('/api/jobsheets');
      setJobSheets(data);
    };
    fetchJobSheets();
  }, []);

  return (
    <div>
      <h1>Job Sheets</h1>
      <Link to="/new">Create New Job Sheet</Link>
      {jobSheets.map((jobSheet) => (
        <div key={jobSheet._id}>
          <Link to={`/jobsheet/${jobSheet._id}`}>{jobSheet.jobName}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
