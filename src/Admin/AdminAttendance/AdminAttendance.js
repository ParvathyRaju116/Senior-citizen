import React, { useState } from 'react';
import './AdminAttendance.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AdminAttendance() {
  const [students, setStudents] = useState([
    { name: 'John Doe', attendance: 'Present', date: new Date() }, // Added date property
    { name: 'Jane Doe', attendance: 'Absent', date: new Date() },
    { name: 'Peter Parker', attendance: 'Late', date: new Date() },
  ]);
  
  const handleAttendanceChange = (event, index) => {
    const newStudents = [...students];
    newStudents[index].attendance = event.target.value;
    setStudents(newStudents);
  };

  const handleDateChange = (date, index) => {
    const newStudents = [...students];
    newStudents[index].date = date;
    setStudents(newStudents);
  };

  return (
    <div className='attendance-container'>
      <div className='attendance-title mt-3'>
        <h3>Service Provider</h3>
      </div>
  
      <table className='attendance-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Date</th> {/* Added Date column */}
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
              <td>
                <DatePicker selected={student.date} onChange={(date) => handleDateChange(date, index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAttendance;
