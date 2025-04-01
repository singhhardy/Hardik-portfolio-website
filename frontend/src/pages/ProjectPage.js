import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const params = useParams();
  const projectId = params.id;
  console.log(projectId);
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://hardik-portfolio-website.vercel.app/api/portfolio/${projectId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setProjectData(data.portfolioItem);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [projectId]);
  
  return (
    <>
      {loading ? (
        <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='bg-skeleton showcase rounded-2'></div>
          </div>
          <div className='col-md-4 d-flex align-items-start flex-column justify-content-center'>
            <h1 className='bg-skeleton rounded-2 py-4'></h1>
            <a
              target='blank'
              className='btn cta-outline cta-bg w-sm-100 text-light rounded-1 py-3 px-5 fw-bold bg-skeleton rounded-2'
            >
            </a>
          </div>
        </div>
        <div className='py-3'>
          <h1 className='fw-bold bg-skeleton w-50 py-4'></h1>
          <p className='bg-skeleton rounded-2'></p>
          <p className='bg-skeleton rounded-2'></p>
          <p className='bg-skeleton rounded-2'></p>
          <p className='bg-skeleton rounded-2'></p>
          <p className='bg-skeleton rounded-2 w-50'></p>
        </div>
      </div>
    ) : (
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-8'>
              <img
                src={`https://hardik-portfolio-website.vercel.app/${projectData.img}`}
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
