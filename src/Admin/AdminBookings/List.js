import { Container } from "@mui/material";
import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return formattedDate;
}

function List() {
  return (
    <Container>
      <div className="scroll2">
        <Table
          striped
          hover
          className="ms-5"
          style={{ width: "90%", border: "3px  #9C6644 solid" }}
        >
          <thead>
            <tr className="text-center">
              <th>
                <h5>Sl.No</h5>
              </th>

              <th>
                <h5>User Name</h5>
              </th>

              <th>
                <h5>Service Provider</h5>
              </th>
              <th>
                <h5>Date</h5>
              </th>
              <th>
                <h5>Action</h5>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>

              <td>Parvathy</td>

              <td>Doctor</td>
              <td>{formatDate("4/4/2024")}</td>
              <td >
                <div className="ms-5" >
                  {" "}
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                    Approve
                    </Button>
                    <Button variant="outlined" color="error">
                      Reject
                    </Button>
                  </Stack>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ajinsa</td>
              <td>Nurse</td>
              <td>{formatDate("4/8/2024")}</td>
              <td>
                <div className="ms-5" >
                  {" "}
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                      Approve
                    </Button>
                    <Button variant="outlined" color="error">
                      Reject
                    </Button>
                  </Stack>
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Midhun</td>
              <td>Therapist</td>
              <td>{formatDate("4/9/2024")}</td>
              <td>
                <div className="ms-5" >
                  {" "}
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                    Approve
                    </Button>
                    <Button variant="outlined" color="error">
                      Reject
                    </Button>
                  </Stack>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <Stack spacing={2} className="text-center mt-3">
          <Pagination count={10} style={{ color: "#B08968" }} />
        </Stack>
      </div>
    </Container>
  );
}

export default List;
