import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const JobSheetPage = () => {
  const [jobSheet, setJobSheet] = useState(null);
  const { id } = useParams(); // Get the ID from the URL
  const history = useHistory();

  // Fetch job sheet data on component mount
  useEffect(() => {
    const fetchJobSheet = async () => {
      try {
        const { data } = await axios.get(`/api/jobsheets/${id}`);
        setJobSheet(data);
      } catch (error) {
        console.error('Error fetching job sheet:', error);
      }
    };
    fetchJobSheet();
  }, [id]);

  // Handle delete job sheet
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this job sheet?')) {
      try {
        await axios.delete(`/api/jobsheets/${id}`);
        history.push('/'); // Redirect to the home page after deletion
      } catch (error) {
        console.error('Error deleting job sheet:', error);
      }
    }
  };

  // Handle print job sheet
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto my-8">
      {jobSheet ? (
        <div>
          <h1 className="text-2xl font-bold">{jobSheet.jobName}</h1>
          <p>{jobSheet.description}</p>
          <p>Status: {jobSheet.status}</p>
          <p>Created at: {new Date(jobSheet.createdAt).toLocaleString()}</p>

          {/* Print and Edit Buttons */}
          <div className="mt-4">
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Print
            </button>
            <Link
              to={`/edit/${jobSheet._id}`}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>

          {/* Back to Home Page */}
          <Link to="/" className="mt-8 text-blue-600">
            Back to Home
          </Link>
        </div>
      ) : (
        <p>Loading job sheet details...</p>
      )}
    </div>
  );
};

export default JobSheetPage;
