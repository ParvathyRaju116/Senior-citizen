import React from 'react';
import './Feedback.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Feedback() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

    ];

    return (
        <div>
            <div className='m-5 p-5'>
                <h1 className='feed1'>Feedbacks</h1>
                <TableContainer component={Paper} className='m-2 feed2'>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className='table-cell feed3'>


                                <h4>  Name</h4>   </TableCell>

                                <TableCell align='left' className='table-cell'> <h4>  Comments</h4> </TableCell>

                                <TableCell className='table-cell'> <h4>  Response</h4> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell align="center" component="th" scope="row" className='table-cell feed5 '>
                                <Stack direction="row" className='ms-5 feed5'  >
                                        <Avatar alt="Remy Sharp" src="https://i.postimg.cc/pT58SGxM/images.png" />
                                        <h6 className='mt-3'>Midhun P M </h6>  
                                    </Stack>
                                   
                                </TableCell>
                                <TableCell className='table-cell '> </TableCell>
                                <TableCell className='table-cell '></TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Feedback;
