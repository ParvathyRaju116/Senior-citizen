import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Container, Col, Row } from "react-bootstrap";
import "./mybookings.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Payment from "./Payment";
import Swal from "sweetalert2";
import { getUnpaidbillsApi } from "../../Services/allApi";
import axios from "axios";
import baseurl from "../../Services/baseurl";

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

function MyBookings() {
  const [total,setTotal] = useState()
  const [open, setOpen] = useState(false);
  const handleOpen = (item,amount) => {
    const id = {id:item}
    setTotal(amount)

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const token = sessionStorage.getItem("token");
  const [unpaid, setUnpaid] = useState([]);

  const [feedback, setFeedback] = useState({ rating: 5, comments: "" });
  const [hover, setHover] = useState(-1);
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };
  console.log(feedback);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const getUnpaidbills = async () => {
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    try {
      // Add authorization header
      const result = await axios.get(
        `${baseurl}/maternalcare/primarybooking/billunpaid/view`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(result.data);
      setUnpaid(result?.data?.bill);
    } catch (error) {
      console.error("Error fetching unpaid bills:", error);
    }
  };

  useEffect(() => {
    getUnpaidbills();
  }, []);
  return (
    <>
      <Header />
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <h1 className="text-center mb-5">Booking Details</h1>
          {unpaid.length > 0
            ? unpaid.map((i) => (
                <Col
                  md={4}
                  className=""
                  style={{ width: "400px", height: "400px" }}
                >
                  <div
                    style={{ height: "380px" }}
                    className="div2 text-center mb-5 "
                  >
                    <div className="mt-5 text-light p-2">
                      <p>Name : {i?.userName.toUpperCase()}</p>
                      <p>Working Hours : {i?.workinghours}</p>
                      <p>Start Date : {i?.startDate}</p>
                      <p>Starting Time : {i?.startingTime.slice(0, 6)}</p>
                      <p>Rate : {i?.rate}</p>
                      <p>Total : {i?.amountPaid}</p>
                      <p>Action : Approved</p>
                      <Button >Feedback</Button>
                      <Payment item = {i}/>
                    </div>
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="mb-3"
          >
            Add Your Feedback
          </Typography>
          <Typography id="modal-modal-description" xl={{ mt: 2 }}>
            <Stack spacing={1}>
              <Rating
                name="hover-feedback"
                value={feedback.rating}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setFeedback({ ...feedback, rating: newValue });
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                size="large"
              />
              {feedback.rating !== null && (
                <Box sx={{ ml: 2 }}>
                  {labels[hover !== -1 ? hover : feedback.rating]}
                </Box>
              )}
            </Stack>
            <TextField
              style={{ width: "100%" }}
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={5}
              placeholder="Enter your feedback"
              value={feedback.comments}
              onChange={(e) =>
                setFeedback({ ...feedback, comments: e.target.value })
              }
            />
          </Typography>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-success mt-3">Submit</button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MyBookings;
