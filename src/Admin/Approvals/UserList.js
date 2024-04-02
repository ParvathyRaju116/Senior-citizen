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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";

function UserList() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor :'#B08968',
          color: theme.palette.common.white,
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
    <Container className='m-5'>
       <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
          <StyledTableCell > Sl.No</StyledTableCell>

            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >E-mail</StyledTableCell>
            <StyledTableCell >Phone Number</StyledTableCell>
            <StyledTableCell >Address</StyledTableCell>
            <StyledTableCell className='text-align-right'  >Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
              
            <StyledTableCell className='text-align-center'>1</StyledTableCell>

            
              <StyledTableCell className='text-align-center'>Ajinsa</StyledTableCell>
              <StyledTableCell className='text-align-center'>ajinsa@gmail.com</StyledTableCell>
              <StyledTableCell className='text-align-center'>1234567891</StyledTableCell>
              <StyledTableCell className='text-align-center'>Kakanad,Ernakulam </StyledTableCell>
              <StyledTableCell className='text-align-center'> <i className="fa-regular fa-2x fa-trash-can" style={{ color: '#B08968' }}></i>
 </StyledTableCell>

              
        
             </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={2} className="text-center mt-3">
          <Pagination count={0} style={{ color: "#B08968" }} />
        </Stack>
    </Container>
  )
}

export default UserList
