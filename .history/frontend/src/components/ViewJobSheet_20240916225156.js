import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ViewJobSheet = () => {
  const { id } = useParams();
  const [jobSheet, setJobSheet] = useState(null);

  // Fetch the job sheet data
  useEffect(() => {
    const fetchJobSheet = async () => {
      const { data } = await axios.get(`/api/jobsheets/${id}`);
      setJobSheet(data);
    };
    fetchJobSheet();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      {jobSheet ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{jobSheet.jobName}</h1>
          <p>{jobSheet.description}</p>
          <p>Status: {jobSheet.status}</p>
          <button onClick={handlePrint} className="btn btn-secondary mt-4">
            Print Job Sheet
          </button>
          <Link to={`/edit/${jobSheet._id}`} className="btn btn-primary mt-4 ml-2">
            Edit Job Sheet
          </Link>
        </>
      ) : (
        <p>Loading job sheet...</p>
      )}
    </div>
  );
};

export default ViewJobSheet;
