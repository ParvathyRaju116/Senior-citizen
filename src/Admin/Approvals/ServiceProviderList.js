import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";
import { Button, Container } from '@mui/material';
import UserAside from './UserAside';


function ServiceProviderList() {
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
    <div style={{ display: 'flex' }}  >
      <UserAside></UserAside>
<Container className='m-5 pe-2'>  
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
          <StyledTableCell > Sl.No</StyledTableCell>

          <StyledTableCell > Image</StyledTableCell>

            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Service</StyledTableCell>
            <StyledTableCell >Specialization</StyledTableCell>
            <StyledTableCell >Qualification</StyledTableCell>
            <StyledTableCell >Rate</StyledTableCell>
            <StyledTableCell >Certificate</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
               1
              </StyledTableCell>
              <StyledTableCell className='text-align-center'>
              <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      
    </Stack>
              
              
              </StyledTableCell>
              <StyledTableCell className='text-align-center'>Ajinsa</StyledTableCell>
              <StyledTableCell className='text-align-center'>Doctor</StyledTableCell>
              <StyledTableCell className='text-align-center'>Cardiology</StyledTableCell>
              <StyledTableCell className='text-align-center'>MD</StyledTableCell>
              <StyledTableCell className='text-align-center'>500</StyledTableCell>
              <StyledTableCell >

                <Button style={{color:"black"}} >View</Button>
              </StyledTableCell>


            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

    <Stack spacing={2} className="text-center mt-3">
          <Pagination count={1} style={{ color: "#B08968" }} />
        </Stack>
        </Container>


    </div>
  )
}

export default ServiceProviderList
