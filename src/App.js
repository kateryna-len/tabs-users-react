import './App.css';
import React, { useEffect, useState } from 'react';
import JobsInfo from './components/JobsInfo';
import BtnContainer from './components/BtnContainer';

function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        jobs={jobs}
      />
      {/*info job */}
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
