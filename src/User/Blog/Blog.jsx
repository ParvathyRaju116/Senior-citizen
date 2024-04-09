import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getAllBlogs, getOneBlog } from "../../Services/allApi";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Blog() {
  const [open, setOpen] = React.useState(false);
  const [oneBlog, setOneBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const handleOpen = async (id) => {
    try {
      const response = await getOneBlog(id);
      if (response.status >= 200 && response.status <= 300) {
        setOneBlog(response?.data?.blog);
      }
      setOpen(true);
    } catch (error) {}
  };
  const handleClose = () => setOpen(false);

  const handleGetBlogs = async () => {
    try {
      const response = await getAllBlogs();
      if (response.status >= 200 && response.status <= 300) {
        setBlogs(response?.data?.allBlogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <>
      <h1 className="text-center">BLOGS</h1>

      <div className="container">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.slice(0, 4).map((item) => (
              <div className="col-lg-3 p-3" key={item._id}>
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Title: {item?.title}</MDBCardTitle>
                    <MDBCardTitle>Date: {item?.date}</MDBCardTitle>
                    <MDBCardText>{item?.description}</MDBCardText>
                    <MDBBtn onClick={() => handleOpen(item?._id)}>View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))
          ) : (
            <h1 className="text-center mt-4 text-danger">No Blogs Available</h1>
          )}

          <div className="text-center">
            <Link>
              <p>View More....</p>
            </Link>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="p-3"
      >
        <Box sx={style} className="border border-0">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              className="shadow d-flex justify-content-center align-items-center flex-column p-4 "
              style={{ height: "auto" }}
            >
              <img
                src="https://bighearts.com.ph/wp-content/uploads/2017/10/reasons-elderly-care-important.jpg"
                alt="no_image"
                style={{ width: "350px", height: "250px" }}
                className="p-3"
              />
              <h5>Title: {oneBlog?.title}</h5>
              <h6>Date: {oneBlog?.date}</h6>
              <p
                className="align-items-center mb-0"
                style={{ whiteSpace: "pre-line", textAlign: "justify" }}
              >
                {oneBlog?.description}
              </p>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Blog;
