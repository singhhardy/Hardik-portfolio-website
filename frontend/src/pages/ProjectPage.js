import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const params = useParams();
  const projectId = params.id;
  console.log(projectId);
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://fair-red-wildebeest-garb.cyclic.app/api/portfolio/${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.portfolioItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, [projectId]);

  console.log(projectData);

  return (
    <>
      {loading ? (
        <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='bg-skeleton showcase'></div>
          </div>
          <div className='col-md-4 d-flex align-items-start flex-column justify-content-center'>
            <h1 className='bg-skeleton'></h1>
            <a
              target='blank'
              className='btn cta-outline cta-bg w-sm-100 text-light rounded-1 py-3 px-5 fw-bold bg-skeleton'
            >
            </a>
          </div>
        </div>
        <div className='py-3'>
          <h1 className='fw-bold bg-skeleton w-50 py-4'></h1>
          <p className='bg-skeleton'></p>
          <p className='bg-skeleton'></p>
          <p className='bg-skeleton'></p>
          <p className='bg-skeleton'></p>
          <p className='bg-skeleton w-50'></p>
        </div>
      </div>
    ) : (
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-8'>
              <img
                src={`https://fair-red-wildebeest-garb.cyclic.app/${projectData.img}`}
                className='img-fluid rounded-2'
                alt='Project View'
              />
            </div>
            <div className='col-md-4 d-flex align-items-start flex-column justify-content-center'>
              <h1>{projectData.title}</h1>
              <a
                target='blank'
                href={projectData.url}
                className='btn cta-outline cta-bg w-sm-100 text-light rounded-1 py-3 px-5 fw-bold'
              >
                Visit Now <i className='fa fa-link'></i>
              </a>
            </div>
          </div>
          <div className='py-3'>
            <h1 className='fw-bold'>Description :</h1>
            <p>{projectData.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectPage;
