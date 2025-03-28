// Admin.js
import React, { useState } from "react";
import Swal from "sweetalert2";

const Admin = () => {
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    description: "",
    url: "",
    img: null,
  });

  const handleInputChange = (e) => {
    setPortfolioData({
      ...portfolioData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setPortfolioData({
      ...portfolioData,
      img: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", portfolioData.title);
    formData.append("description", portfolioData.description);
    formData.append("url", portfolioData.url);
    formData.append("img", portfolioData.img);

    const url = "https://hardik-portfolio-website.vercel.app//api/portfolio/upload";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: `${data.message} !`,
          text: "Portfolio Added Successfully :D",
          type: "success",
        });
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        Swal.fire({
          title: "Something Went Wrong",
          text: error.message,
          type: "error",
        });
      });
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fw-bold show-text  text-end">Add <br />
           <span className="cta-text">Portfolio</span> Items <br/>
           <i className="fa fa-arrow-right show-text"></i>
           </h2>
        </div>

        <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label className="mt-2  fw-bold">Title:</label>
            <input
              type="text"
              className="form-control mt-2 py-2 bg-transparent text-color "
              name="title"
              placeholder="Enter Title here"
              value={portfolioData.title}
              onChange={handleInputChange}
              required
            />

            <label className="mt-2 fw-bold">Description:</label>
            <textarea
              name="description"
              className="form-control mt-2 bg-transparent text-color h-150"
              placeholder="Enter Description here"
              value={portfolioData.description}
              onChange={handleInputChange}
              required
            />

            <label className="mt-2 fw-bold">URL:</label>
            <input
              type="text"
              name="url"
              placeholder="http://www.example.com"
              className="form-control mt-2  py-2 bg-transparent text-color "
              value={portfolioData.url}
              onChange={handleInputChange}
              required
            />

            <label className="mt-2 fw-bold">Image:</label>
            <input
              type="file"
              name="img"
              className="form-control mt-2 bg-transparent text-color "
              accept="image/*"
              onChange={handleFileChange}
            />

            <button
              type="submit"
              className="btn btn-block act-bg shadow-primary text-white mt-3 py-3"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
