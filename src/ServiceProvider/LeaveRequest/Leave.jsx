import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import TextField from "@mui/material/TextField";
import AcceptedLeave from "./AcceptedLeave";

function Leave() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <div className="mb-5">
        <Navbar />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Leave Request</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RB557crs7nQPgynwfUXCG5t7Tpce5htcT_ngdCOoxw&s"
                  style={{
                    width: "20%",
                    marginLeft: "40%",
                    borderRadius: "50%",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateRangePicker"]}>
                        <DateRangePicker
                          localeText={{ start: "Check-in", end: "Check-out" }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <TextField className="w-100 mt-4"
                      id="standard-basic"
                      label="Reason"
                      variant="standard"
                    />
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-center">
                  <Button variant="contained">Submit</Button>
                </CardActions>
              </Card>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
          <div className="container mt-5">
              <AcceptedLeave/>
      </div>
    </div>
  );
}

export default Leave;
