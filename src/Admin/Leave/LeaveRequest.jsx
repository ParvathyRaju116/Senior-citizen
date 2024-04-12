import React, { useEffect, useState } from "react";
import "./Leave.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiInputDateTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputDateTimeRangeField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import baseurl from "../../Services/baseurl";
import Swal from "sweetalert2";

function LeaveRequest() {
  const [leaveReq, setLeaveReq] = useState([]);


  useEffect(() => {
    getAlltheReqs();
  }, []);

  const getAlltheReqs = async () => {
    try {
      const response = await axios.get(`${baseurl}/request/leave-request`);

      if (response.status >= 200 && response.status <= 300) {
        setLeaveReq(response?.data?.allReq);
      }
    } catch (error) {}
  };

  const handleAccept = async (item) => {
    const res = { id: item };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve It",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            `${baseurl}/leave-request/accept`,
            res
          );

          if (response?.status >= 200 && response?.status <= 300) {
            Swal.fire({
              title: "Approved",
              text: "Leave Request Approved.",
              icon: "success",
            });
            getAlltheReqs();
            console.log(response);
          } else {
            Swal.fire({
              title: "Not Approved",
              text: "Leave Request Not Appproved",
              icon: "warning",
            });
          }
        } catch (error) {
          
            Swal.fire({
              title: "Oops",
              text: "Something went Wrong",
              icon: "error",
            });
          
          console.error("Error rejecting service provider:", error);
        }
      }
    });
  };

  const handleDelete = (item) => {
    const res = { id: item };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Reject IT ",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            `${baseurl}/leave-request/reject`,
            res
            // Use 'data' option to pass the payload
          );

          if (response?.status >= 200 && response?.status <= 300) {
            Swal.fire({
              title: "Rejected",
              text: "Leave Request Rejected.",
              icon: "success",
            });
            console.log(response);
            getAlltheReqs();
          } else {
            Swal.fire({
              title: "Not Rejected",
              text: "Leave Request Not Rejected",
              icon: "warning",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Oops",
            text: "Something went Wrong",
            icon: "error",
          });

          console.error("Error rejecting Leave Request:", error);
        }
      }
    });
  };

  return (
    <div style={{ backgroundColor: "beige" }}>
      {leaveReq.length > 0 ? (
        <div className="leave1 ">
          <div className="card-container m-5 ">
            <div className="row">
              {leaveReq.map((i) => (
                <div className="col-lg-3 col-md-12 p-3">
                  <Card
                    sx={{ maxWidth: 280 }}
                    style={{ border: "3px solid #9C6644 " }}
                  >
                    <div
                      className="image-wrapper my-4"
                      style={{
                        backgroundColor: "beige",
                        borderRadius: "50%",
                        width: "60%",
                        margin: "auto",
                        padding: "10px",
                      }}
                    >
                      <CardMedia
                        className="m-auto my-3"
                        sx={{ height: 100, borderRadius: "50%", width: "100%" }}
                        image="https://i.postimg.cc/NfFdngDQ/download-removebg-preview.png"
                        title="green iguana"
                      />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ marginTop: "-35px", textAlign: "center" }}
                      >
                        Dr. Ajinsa P A
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginTop: "-5px", textAlign: "center" }}
                      >
                        Cardiologist
                      </Typography>
                      <h5 className="leave2">Request Details</h5> <br />
                      <h6 className="leave3">Date:</h6>
                    </CardContent>{" "}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className="px-2">
                        <input
                          type="text"
                          className="form-control "
                          value={i?.date}
                          disabled
                        />
                      </div>
                    </LocalizationProvider>
                    <br />
                    <h6 className="leave4 ms-2 ">Reason:</h6>
                    <div>
                      <TextField
                        className="leave4 ms-3 my-3"
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        disabled
                        value={i?.reason}
                      />
                    </div>
                    <CardActions>
                      <Stack direction="row" spacing={6}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleAccept(i?._id)}
                        >
                          Accept✅
                        </Button>
                        <Button
                          className="leave5"
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(i?._id)}
                        >
                          Reject❌
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-danger mt-5">No Leave Req Found</h1>
      )}
    </div>
  );
}

export default LeaveRequest;
