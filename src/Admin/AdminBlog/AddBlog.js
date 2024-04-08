import React from "react";
import BlogAside from "./BlogAside";
import Form from "react-bootstrap/Form";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function AddBlog() {
  const ProSpan = styled("span")({
    display: "inline-block",
    height: "1em",
    width: "1em",
    verticalAlign: "middle",
    marginLeft: "0.3em",
    marginBottom: "0.08em",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(https://mui.com/static/x/pro.svg)",
  });
  function Label({ componentName, valueType, isProOnly }) {
    const content = (
      <span>
        <strong>{componentName}</strong> for {valueType} editing
      </span>
    );

    if (isProOnly) {
      return (
        <Stack direction="row" spacing={0.5} component="span">
          <Tooltip title="Included on Pro package">
            <a
              href="https://mui.com/x/introduction/licensing/#pro-plan"
              aria-label="Included on Pro package"
            >
              <ProSpan />
            </a>
          </Tooltip>
          {content}
        </Stack>
      );
    }

    return content;
  }
  return (
    <div style={{ display: "flex" }} >
    <BlogAside></BlogAside>
    <Container className="p-5" style={{ width: "50%" }}>
      <div
        className="d-flex flex-column align-items-center"
        style={{ border: "3px solid #B08968" }}
       
      >
        <h3 style={{ color: "#B08968", marginTop: "10px", marginBottom: "10px" }} className="text-center">
          Add Blogs
        </h3>
  
        <Form style={{ width: "90%" }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="title" />
          </Form.Group>
  
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="my-3">
              <DemoContainer
                components={[
                  "DatePicker",
                  "TimePicker",
                  "DateTimePicker",
                  "DateRangePicker",
                ]}
              >
                <DemoItem>
                  <DatePicker />
                </DemoItem>
              </DemoContainer>
            </div>
          </LocalizationProvider>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
        
        <Form.Control type="file" />
      </Form.Group>
      <div className="my-2 text-center"> 
      <button className="btn btn "  style={{backgroundColor:"#B08968", color:"white"}} >Add</button>
      </div> 
        </Form>
      </div>



    </Container>
    
  </div>
  );
}

export default AddBlog;
