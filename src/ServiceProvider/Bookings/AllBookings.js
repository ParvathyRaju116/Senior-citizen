import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Col,Row} from 'react-bootstrap';
import { getAllBookingsApi } from '../../Services/allApi';

function AllBookings() {

const[bookings,setBookings]=useState({})

const getBookings = async () => {
    try {
      const result = await getAllBookingsApi();
      setBookings(result?.data?.allUsersList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookings()   }, []);
console.log(bookings);

  return (
    <div>

<Container  > 
<h1 className='text-center mt-5' >Bookings</h1>
<Row> 
<Col  lg={4} className='' >  

<Card sx={{ maxWidth: 345 }} className='p-3' >
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         UserName :
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Service Provider Name :
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Service :
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Care:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Start Date:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         End Date:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Starting Time:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Ending Time:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Location:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
     Rate:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
    Service Provider Status:
        </Typography>
        
       
      </CardContent>
      <CardActions>
       
        <Button  style={{backgroundColor:"green",color:"white"}} className='btn' size="small">Approve</Button>
        <Button style={{backgroundColor:"red",color:"white"}}className='btn ' size="small">Reject</Button>
      
    
      </CardActions>
    </Card>


    </Col>
    </Row>
</Container>


    </div>
  )
}

export default AllBookings
