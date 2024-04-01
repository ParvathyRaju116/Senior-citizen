import React from "react";
import Header from "../Header/Header";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function Feedback() {
  return (
    <>
      
        <Header />
        <div style={{ paddingTop: "70px" }}>
        <div className="pt-5 d-flex justify-content-center align-items-center">
          {/* Rating component placed below the Header */}
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value=""
              precision={1}
              /* getLabelText={getLabelText} */
              size="large"
            />
          </Box>
        </div>
        <div className="mt-4 d-flex" style={{marginLeft:'100px'}}>
            <input type="text"  className="form-control w-75 ms-5" style={{height:'90px'}}/>
            <button className="btn btn-success ms-3">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Feedback;
