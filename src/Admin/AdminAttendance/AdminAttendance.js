import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminAttendance.css';

function AdminAttendance() {
  const [students, setStudents] = useState([
    { name: 'John Doe', attendance: 'Present' },
    { name: 'Jane Doe', attendance: 'Absent' },
    { name: 'Peter Parker', attendance: 'Late' },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAttendanceChange = (event, index) => {
    const newStudents = [...students];
    newStudents[index].attendance = event.target.value;
    setStudents(newStudents);
  };

  return (
    <div className='attendance-container'>
      <div className='attendance-title mt-3'>
        <h3>Service Provider</h3>
      </div>
      <div className='date-picker-container'>
        <label>Date:</label>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      </div>
      <table className='attendance-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody className='table2'>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>
                <select value={student.attendance} onChange={(event) => handleAttendanceChange(event, index)}>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAttendance;
