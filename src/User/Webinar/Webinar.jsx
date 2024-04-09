import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./webinar.css";
import { getAllwebinarApi } from "../../Services/allApi";

function Webinar() {
  const [webinar, setWebinar] = useState([]);

  const getAllWebinar = async () => {
    try {
      const result = await getAllwebinarApi();
    console.log(result);
    setWebinar(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWebinar();
  }, []);
  return (
    <div>
      <Header />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.silverts.com/givingcare/wp-content/uploads/2022/05/young-nurse-helping-old-elderly-disable-man.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Webinar</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                accusantium unde consequatur harum inventore ducimus doloremque
                consequuntur nam. At tenetur alias quidem est mollitia, pariatur
                architecto quis esse exercitationem veritatis.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://home-nursing.care/assets/images/elderly-care-jaipur-meta.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Webinar</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                accusantium unde consequatur harum inventore ducimus doloremque
                consequuntur nam. At tenetur alias quidem est mollitia, pariatur
                architecto quis esse exercitationem veritatis.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.ashleycourtcare.co.uk/wp-content/uploads/2018/10/Senior-and-Elderly-Care-Living-Options.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Webinar</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                accusantium unde consequatur harum inventore ducimus doloremque
                consequuntur nam. At tenetur alias quidem est mollitia, pariatur
                architecto quis esse exercitationem veritatis.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-5">
        <div className="col-md-4">
          {webinar?.length===0?
            webinar?.map((item) => (
              <div className="card">
            <img
              src="https://elder-care-india.com/wp-content/uploads/2024/01/role-of-nurses-in-the-care-of-elderly-patients.jpg"
              className="card-img-top"
              alt="Webinar"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-danger display-6">
                {item.title}
              </h5>
              <p className="card-text ms-5">
                    <strong>Topics:{item.topics}</strong>{" "}
              </p>
              <p className="card-text ms-5">
                <strong>Date:12/05/2024</strong>{" "}
              </p>
              <p className="card-text ms-5">
                <strong>Time:05:30</strong>{" "}
              </p>
              <p className="card-text ms-5">
                <strong>Description:fdgdfgfdgd</strong>{" "}
              </p>
              <p className="card-text ms-5">
                <strong>Speaker:fdgdgdf</strong>{" "}
              </p>
            </div>
            </div>
        ))
        : <h1>No Webinars Available</h1>  
        }
        </div>
      </div>
    </div>
  );
}

export default Webinar;
