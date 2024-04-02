import React from 'react';
import './Leave.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function LeaveRequest() {
  const [value, setValue] = React.useState([
    dayjs('2022-04-17'),
    dayjs('2022-04-21'),
  ]);
  return (
    <div style={{backgroundColor:"beige"}}>
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
              <Typography gutterBottom variant="h5" component="div"  style={{ marginTop: '-35px',textAlign:"center" }}>
                Dr. Ajinsa P A
              </Typography>
              <Typography variant="body2" color="text.secondary"  style={{ marginTop: '-5px',textAlign:"center"  }}>
                Cardiologist
              </Typography>
             <h5  className='leave2' >Request Details</h5>
             <h6  className='leave3'  >Date</h6>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Uncontrolled picker" component="DateRangePicker">
          <DateRangePicker
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          />
        </DemoItem>
        <DemoItem label="Controlled picker" component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LeaveRequest;
