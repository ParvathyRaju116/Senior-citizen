import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./webinar.css";
import { getAllwebinarApi } from "../../Services/allApi";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn
} from "mdb-react-ui-kit";

function Webinar() {
  const [webinar, setWebinar] = useState([]);

  const getAllWebinar = async () => {
    try {
      const result = await getAllwebinarApi();
      console.log(result);
      setWebinar(result?.data?.allWebinar);
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
        <div className="row">
          {webinar?.length > 0 ? (
            webinar?.map((item) => (
              <div className="col-md-4 p-4">
                <MDBCard>
                  <MDBCardImage
                    position="top"
                    alt="..."
                    src="https://mdbootstrap.com/img/new/standard/city/062.webp"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{item?.title}</MDBCardTitle>
                    <MDBCardText>{item?.description}</MDBCardText>
                  </MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem>
                      <b>Date: </b>
                      {item?.date}
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <b>Time: </b>
                      {item?.time}
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <b>Speaker: </b>
                      {item?.speaker}
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <b>Topics: </b>
                      {item?.topics}
                    </MDBListGroupItem>
                  </MDBListGroup>
                  <MDBCardBody>
                    <MDBBtn>Book</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))
          ) : (
            <h1>No Webinars Available</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Webinar;
