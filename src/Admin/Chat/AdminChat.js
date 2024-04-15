import React, { useState } from 'react';
import { Container, InputBase, IconButton, Divider, TextField } from '@mui/material'; // Import IconButton, Divider, and TextField
import { Search as SearchIcon, Send as SendIcon } from '@mui/icons-material'; // Import the search and send icons
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Row, Col } from 'react-bootstrap';

function AdminChat() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement sending the message logic here
    console.log('Sending message:', message);
    // Clear the message input field after sending
    setMessage('');
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', padding: "10px" }}>
      
      <h3 className='ms-5 mt-2'>Chat</h3>
      <Container className='mt-5 '  style={{ backgroundColor: 'white' }}>
     
        <Row  >
          <Col lg={4} style={{borderRight:"15px solid #FAF9F6 "}}  >
         
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search…"
                sx={{ flex: 1, bgcolor: 'background.paper', padding: '10px' }}
              />
            </div>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Ajinsa P A"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                      {" — Hlo i want to know about your service…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Midun"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                      {" — Hlo i want to know about your service…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Parvathy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                      {' — Hlo i want to know about your service…"'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </List>
          </Col>
          <Col lg={8}  >
            <h5 className='ms-3 mt-2'>Ajinsa</h5>
            <Divider component="li" />

            <div className="chat_body poppins-regular">
              <div className="admin_chat">
                <p>
                  <div className="admin_title">Admin</div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  doloremque possimus explicabo, eveniet, accusamus animi soluta
                  optio eum commodi sunt, delectus nobis voluptatibus. Eius dolor,
                  expedita repudiandae amet eaque animi.
                </p>
              </div>
              <div className="user_chat">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  doloremque possimus explicabo, eveniet, accusamus animi soluta
                  optio eum commodi sunt, delectus nobis voluptatibus. Eius dolor,
                  expedita repudiandae amet eaque animi.
                </p>
              </div>
              <div className="user_chat">
                <p>Hi</p>
              </div>
              <div className="admin_chat">
                <p>
                  <div className="admin_title">Admin</div>
                  Hello
                </p>
              </div>
              <div className="admin_chat">
                <p>
                  <div className="admin_title">Admin</div>
                  Lorem ipsum, dolor sit amet consectetur.
                </p>
              </div>

              {/* Message Form */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <TextField
                  id="outlined-basic"
                  label="Type a message"
                  variant="outlined"
                  fullWidth
                  value={message}
                  onChange={handleMessageChange}
                />
                <IconButton aria-label="send" onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminChat;
