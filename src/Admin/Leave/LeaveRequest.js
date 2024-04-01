import React from 'react';
import './Leave.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function LeaveRequest() {

  return (
    <div style={{ backgroundColor: "beige" }}>
      <div className='leave1 '>
        <div className='card-container m-5'>
          <Card sx={{ maxWidth: 280 }} style={{ border: '3px solid #9C6644 ' }}>
            <div className="image-wrapper my-4" style={{ backgroundColor: 'beige', borderRadius: '50%', width: "60%", margin: 'auto', padding: '10px' }}>
              <CardMedia
                className='m-auto my-3'
                sx={{ height: 100, borderRadius: '50%', width: "100%", }}
                image="https://i.postimg.cc/NfFdngDQ/download-removebg-preview.png"
                title="green iguana"
              />
            </div>
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" style={{ marginTop: '-35px', textAlign: "center" }}>
                Dr. Ajinsa P A
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginTop: '-5px', textAlign: "center" }}>
                Cardiologist
              </Typography>
              <h5 className='leave2' >Request Details</h5> <br />
              <h6 className='leave3'  >Date:</h6>

            </CardContent> <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'MultiInputDateTimeRangeField',
                  'SingleInputDateTimeRangeField',
                ]}
              >
                <div style={{ marginLeft: '10px', marginRight: '10px', marginTop: '-5px' }}>
                  <MultiInputDateTimeRangeField
                    slotProps={{
                      textField: ({ position }) => ({
                        label: position === 'start' ? 'Start-Date' : 'End-Date',
                      }),
                    }}
                  />
                </div>

              </DemoContainer>
            </LocalizationProvider>
            <br />
            <h6 className='leave4 ms-2 '  >Reason:</h6>
            <div>

              <TextField className='leave4 ms-3 my-3'
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
               
                />
    </div>
            <CardActions>
            <Stack direction="row" spacing={6}  >
    
      <Button variant="contained" color="success">
      Accept✅
      </Button>
      <Button className='leave5' variant="outlined" color="error">
     Reject❌
      </Button>
    </Stack>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LeaveRequest;