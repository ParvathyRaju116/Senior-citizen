import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
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

function Modal({ servicess }) {
  const [staticModal, setStaticModal] = useState(false);

  const token = sessionStorage.getItem("token");

  const toggleOpen = () => setStaticModal(!staticModal);
  const [open, setOpen] = useState(false);

  const [booking, setBooking] = useState({
    typeOfCare: "",
    startingTime: "",
    endingTime: "",
    startDate: "",
    endDate: "",
    services: servicess.service,
    location: "",
    serviceProviderName: servicess.username,
    service: servicess.service,
    serviceProviderId: servicess._id,
    profile_img: servicess.experience_crt,
    serviceProviderEmail: servicess.email,
    serviceProviderMobile: servicess.mobile,
    rate: servicess.rate,
  });

  const handleStartDateChange = (date) => {
    const formattedDate = dayjs(date).format("MM/DD/YYYY");
    setBooking({ ...booking, startDate: formattedDate });
  };

  const handleEndDateChange = (date) => {
    const formattedDate = dayjs(date).format("MM/DD/YYYY");
    setBooking({ ...booking, endDate: formattedDate });
  };

  const handleStartTimeChange = (time) => {
    if (time) {
      setBooking({ ...booking, startingTime: time });
    }
  };

  const handleEndTimeChange = (time) => {
    if (time) {
      setBooking({ ...booking, endingTime: time });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      typeOfCare,
      startingTime,
      endingTime,
      startDate,
      endDate,
      location,
    } = booking;

    if (
      !typeOfCare ||
      !startingTime ||
      !endingTime ||
      !startDate ||
      !endDate ||
      !location
    ) {
      Swal.fire({
        title: "Please fill the form",
        icon: "warning",
      });
    } else {
      try {
        const result = await axios.post(
          `${baseurl}/service-provider/primary-booking`,
          booking,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (result.status >= 200 && result.status <= 300) {
          console.log(result);
          Swal.fire({
            title: "Booking Completed",
            icon: "success",
          });

          setBooking({
            typeOfCare: "",
            startingTime: "",
            endingTime: "",
            startDate: "",
            endDate: "",
            location: "",
          });
          toggleOpen();

          document.querySelectorAll(".date").forEach((input) => {
            input.value = "";
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(servicess);
  console.log(booking);

  return (
    <div>
      <div>
        <Button onClick={toggleOpen}>Book Now</Button>
        <MDBModal
          staticBackdrop
          tabIndex="-1"
          open={staticModal}
          onClose={() => setStaticModal(false)}
          className=" "
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  <h4 className="mb-3 ms-4">Book Service Provider</h4>
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form style={{ width: "100%" }}>
                  <div className="mb-3">
                    <label htmlFor="">Type of care</label>
                    <input
                      type="text"
                      className="form-control"
                      value={booking.typeOfCare}
                      onChange={(e) =>
                        setBooking({ ...booking, typeOfCare: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">starting Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value={booking.startingTime}
                      onChange={(e) => handleStartTimeChange(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">ending Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value={booking.endingTime}
                      onChange={(e) => handleEndTimeChange(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">start Date</label>
                    <input
                      type="date"
                      className="form-control date"
                      onChange={(e) => handleStartDateChange(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">end Date</label>
                    <input
                      type="date"
                      className="form-control date"
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => handleEndDateChange(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      value={booking.location}
                      onChange={(e) =>
                        setBooking({ ...booking, location: e.target.value })
                      }
                    />
                  </div>
                  <div></div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleOpen}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={(e) => handleSubmit(e)}>Book Now</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}

export default Modal;
