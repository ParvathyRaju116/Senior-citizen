import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from '@mui/material';
import Table from 'react-bootstrap/Table';
import { getAllAttendanceApi } from '../../Services/allApi';
import Pagination from "@mui/material/Pagination";

function ServiceAttendance() {
  const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
  });

  function Label({ componentName, isProOnly }) {
    const content = (
      <span>
        <strong>{componentName}</strong> for view attendance
      </span>
    );

    if (isProOnly) {
      return (
        <Stack direction="row" spacing={0.5} component="span">
          <Tooltip title="Included on Pro package">
            <a
              href="https://mui.com/x/introduction/licensing/#pro-plan"
              aria-label="Included on Pro package"
            >
              <ProSpan />
            </a>
          </Tooltip>
          {content}
        </Stack>
      );
    }

    return content;
  }

  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getAttendance = async () => {
    try {
      const result = await getAllAttendanceApi();
      setAttendance(result.data?.AllAttendence);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAttendance();
  }, []);

  const filteredAttendance = selectedDate
    ? attendance.filter(
        (entry) =>
          new Date(entry.date).toISOString().slice(0, 10) ===
          selectedDate.toISOString().slice(0, 10)
      )
    : attendance;

  return (
    <Container>
      <h1 className='mt-5 text-center' style={{ color: "#B08968" }} >Service Provider Attendance</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DatePicker',
            'TimePicker',
            'DateTimePicker',
            'DateRangePicker',
          ]}
        >
          <DemoItem label={<Label componentName="Choose Date" valueType="date" />}>
            <DatePicker onChange={handleDateChange} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <div className='mt-5 text-center'>
        <Table bordered style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>E-mail</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Working Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{}</td>
                <td>{entry.time_in}</td>
                <td>{entry.time_out}</td>
                <td>{entry.working_hours}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Stack spacing={2} className="text-center mt-3">
          <Pagination
            count={Math.ceil(filteredAttendance.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            style={{ color: "#B08968" }}
          />
        </Stack>
      </div>
    </Container>
  );
}

export default ServiceAttendance;
