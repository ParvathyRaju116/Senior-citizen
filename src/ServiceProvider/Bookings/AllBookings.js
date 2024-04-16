import React from 'react'
import { Container } from '@mui/material'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Col,Row} from 'react-bootstrap';

function AllBookings() {
  return (
    <div>

<Container  > 
<h1 className='text-center mt-5' >Bookings</h1>
<Row> 
<Col  lg={3} className='' >  

<Card sx={{ maxWidth: 345 }} >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         UserName :
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Service Provider Name :
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Service :
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Care:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Start Date:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         End Date:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Starting Time:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Ending Time:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    </Col>
    </Row>
</Container>


    </div>
  )
}

export default AllBookings
