import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getAllBlogs, getOneBlog } from "../../Services/allApi";

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
      {" "}
      <h1 className="text-center">BLOGS</h1>
      <div className="pt-5">
        <marquee>
          {blogs.length > 0 ? (
            blogs.map((item) => (
              <>
                <div
                  className="shadow d-flex justify-content-center align-items-center flex-column p-4"
                  style={{ width: "400px", height: "auto" }}
                >
                  <div>
                    {" "}
                    <img
                      src="https://bighearts.com.ph/wp-content/uploads/2017/10/reasons-elderly-care-important.jpg"
                      alt="no_image"
                      style={{ width: "350px", height: "250px" }}
                      className="p-3"
                    />
                  </div>
                  <h6>Title : {item?.title}</h6>
                  <h6>Date: {item?.date}</h6>
                  <p
                    className="align-items-center mb-0 ms-4"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item?.description}{" "}
                    <Button onClick={() => handleOpen(item?._id)}>
                      Read more
                    </Button>
                  </p>
                </div>
              </>
            ))
          ) : (
            <h1> No Blogs Added!!!</h1>
          )}
        </marquee>
      </div>
      {/* modal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="p-3"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div
                className="shadow d-flex justify-content-center align-items-center flex-column p-4"
                style={{ width: "350px", height: "auto" }}
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
                  style={{ whiteSpace: "pre-line" }}
                >
                  {oneBlog?.description}
                </p>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Blog;
