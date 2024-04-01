import React from 'react';
import './Feedback.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Feedback() {
  return (
    <div>
      <div className='m-5 p-5'>
        <h1 className='feed1'>Feedbacks</h1>
        <TableContainer component={Paper} className='m-2 feed2'>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow className='table-row'>
                <TableCell align="center" className='table-cell feed3'>
                  <h4>Name</h4>
                </TableCell>
                <TableCell className='table-cell'>
                  <h4>Comments</h4>
                </TableCell>
                <TableCell className='table-cell'>
                  <h4>Rating</h4>
                </TableCell>
                <TableCell className='table-cell'>
                  <h4>Response</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className='table-row'>
                <TableCell align="center" className='table-cell feed5'>
                  <Stack direction="row" className='ms-5 feed5'>
                    <Avatar alt="Remy Sharp" src="https://i.postimg.cc/pT58SGxM/images.png" />
                    <h6 className='mt-3 ms-3'>Midhun P M</h6>
                  </Stack>
                </TableCell>
                <TableCell className='table-cell'>"I am very happy and satisfied"</TableCell>
                <TableCell className='table-cell'>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </TableCell>
                <TableCell className='table-cell'>
                    <div className='feed6'>

                    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Success
      </Button>
      
    </Stack>

                    </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Feedback;
