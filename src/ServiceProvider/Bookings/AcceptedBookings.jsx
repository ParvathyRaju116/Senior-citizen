import { Button, Container } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Navbar from '../Navbar/Navbar';


function AcceptedBookings() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor :'#B08968',
          color: theme.palette.common.white,
          width: '150px', // Adjust the width here
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
  return (
    <>
          <Navbar />
          <Container className='mt-5'>
          <TableContainer component={Paper} >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow >
          <StyledTableCell> Sl.No</StyledTableCell>
          <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell>Dr Name</StyledTableCell>
            <StyledTableCell>Service</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
               1
              </StyledTableCell>
              <StyledTableCell className='text-align-center'>Arya</StyledTableCell>
              <StyledTableCell className='text-align-center'>Ajinsa</StyledTableCell>
             <StyledTableCell className='text-align-center'>Day Care</StyledTableCell>
              <StyledTableCell className='text-align-center'>12/04/2024</StyledTableCell>
              <StyledTableCell className='text-align-center'>10:30</StyledTableCell>
              <StyledTableCell className='text-align-center'>5000</StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
          </Container>
    </>
  )
}

export default AcceptedBookings