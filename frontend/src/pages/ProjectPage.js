import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function ProjectPage() {
    const params = useParams()
    const projectId = params.id
    console.log(projectId)
    const [projectData, setProjectData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data when the component mounts
      fetch(`https://fair-red-wildebeest-garb.cyclic.app/api/portfolio/${projectId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          setProjectData(data.portfolioItem);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching project data:', error);
          setLoading(false);
        });
    }, [projectId]);
  
    console.log(projectData)

  return (
    <>
      {loading ? (
        // Loading state
        <p>Loading...</p>
      ) : (
        // Render project details when data is available
        <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8'>
            <img src={`https://fair-red-wildebeest-garb.cyclic.app/${projectData.img}`} className='img-fluid rounded-2' alt='Project Image' />
          </div>
          <div className='col-md-4 d-flex align-items-start flex-column justify-content-center'>
            <h1>{projectData.title}</h1>
            <a target='blank' href={projectData.url} className='btn cta-outline cta-bg w-sm-100 text-light rounded-1 py-3 px-5 fw-bold'>
              Visit Now
            </a>
          </div>
        </div>
        <div className='py-3'>
            <h1>Description :</h1>
            <p>{projectData.description}</p>
        </div>
        </div>
      )}
    </>
  )
}

export default ProjectPage
