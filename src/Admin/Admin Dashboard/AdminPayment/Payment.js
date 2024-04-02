import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Payment.css';


export default function Payment() {
    return (
        <div>
            <h4 className='text-center m-4' style={{ color: "#9C6644" }}> Service Provider Payment history</h4>
            <TableContainer component={Paper} className="payment-table p-2  "  >
                <Table aria-label="simple table "className='scroll' >
                    <TableHead>
                        <TableRow>
                            <TableCell>Service Provider</TableCell>
                            <TableCell >Client</TableCell>
                            <TableCell >Cash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell component="th" scope="row">
                                Doctor
                            </TableCell>

                            <TableCell >Ajinsa</TableCell>
                            <TableCell ></TableCell>

                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Doctor
                            </TableCell>

                            <TableCell >Ajinsa</TableCell>
                            <TableCell ></TableCell>

                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Doctor
                            </TableCell>

                            <TableCell >Ajinsa</TableCell>
                            <TableCell ></TableCell>

                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Doctor
                            </TableCell>

                            <TableCell >Ajinsa</TableCell>
                            <TableCell ></TableCell>

                        </TableRow>
                        

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
