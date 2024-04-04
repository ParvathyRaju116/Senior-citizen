import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { getServiceProvidersApi } from "../../Services/allApi";
import axios from "axios";
import Swal from "sweetalert2";

function ServiceApproval() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#B08968",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // state
  const [spList, setSpList] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const getServiceProviders = async () => {
    const result = await getServiceProvidersApi();
    setSpList(result?.data?.allServiceproviders);
  };

  useEffect(() => {
    getServiceProviders();
  }, []);

  const handleResponse = async (item) => {
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
        const response = await axios.post(
          `http://localhost:5000/approve/serviceProvider`,
          item
        );
        if(response?.status >=200 && response?.status <=300){
          Swal.fire({
            title: "Approved",
            text: "Service Provider Approved.",
            icon: "success",
          });
          getServiceProviders();
        }
       else{
        Swal.fire({
          title: "Not Approved",
          text: "Service Provider Not Approved.",
          icon: "warning",
        });
       }
      }
    });
  };

  const handleDelete =(email)=>{
    const reqBody = new FormData()
    reqBody.append("email",email)
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
        const response = await axios.delete(
          `http://localhost:5000/reject/serviceProvider/request`,
          reqBody
        );
        if(response?.status >=200 && response?.status <=300){
          Swal.fire({
            title: "Approved",
            text: "Service Provider Rejected.",
            icon: "success",
          });
          getServiceProviders();
        }
       else{
        Swal.fire({
          title: "Not Rejected",
          text: "Service Provider Not Rejected.",
          icon: "warning",
        });
       }
      }
    });
  }


  if (spList === null) return <></>;
  console.log(spList);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container
      className="m-5 mx-2"
      style={{ margin: "auto", maxWidth: "100%", overflowX: "auto" }}
    >
      <h3 className="text-center">Service Providers Approval List</h3>
      <TableContainer
        component={Paper}
        style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Sl.No</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>E-mail</StyledTableCell>
              <StyledTableCell>Service</StyledTableCell>
              <StyledTableCell>Specialization</StyledTableCell>
              <StyledTableCell>Qualification</StyledTableCell>
              <StyledTableCell>Rate</StyledTableCell>
              <StyledTableCell>Certificate</StyledTableCell>
              <StyledTableCell className="text-align-right">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spList
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((i, index) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.username}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.email}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.service}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.specialization}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.qualification}
                  </StyledTableCell>
                  <StyledTableCell className="text-align-center">
                    {i?.rate}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button style={{ color: "black" }}>View</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <div>
                      {" "}
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleResponse(i)}
                        >
                          Approve
                        </Button>
                        <Button variant="outlined" color="error" onClick={()=>handleDelete(i?.email)}>
                          Reject
                        </Button>
                      </Stack>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} className="text-center mt-3">
        <Pagination
          count={Math.ceil(spList.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          style={{ color: "#B08968" }}
        />
      </Stack>
    </Container>
  );
}

export default ServiceApproval;
