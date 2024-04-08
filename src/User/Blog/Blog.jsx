import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="pt-5">
        <h1 className="text-center">BLOGS</h1>
        <marquee>
          <div
            className="shadow d-flex justify-content-center align-items-center flex-column p-4"
            style={{ width: "400px", height: "auto" }}
          >
            <img
              src="https://bighearts.com.ph/wp-content/uploads/2017/10/reasons-elderly-care-important.jpg"
              alt="no image"
              style={{ width: "350px", height: "250px" }}
              className="p-3"
            />
            <h6>Date: 12/01/2024</h6>
            <p
              className="align-items-center mb-0 ms-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              obcaecati veritatis! Sapiente quia a voluptatem.....{" "}
              <Button onClick={handleOpen}>Read more</Button>
            </p>
          </div>
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
                  alt="no image"
                  style={{ width: "350px", height: "250px" }}
                  className="p-3"
                />
                <h6>Date: 12/01/2024</h6>
                <p
                  className="align-items-center mb-0"
                  style={{ whiteSpace: "pre-line" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, obcaecati veritatis! Sapiente quia a voluptatem Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                  incidunt ipsam cum saepe earum, unde deleniti, quidem
                  reiciendis suscipit enim cupiditate architecto quis,
                  exercitationem non aliquam debitis illum iure! Aperiam.
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
