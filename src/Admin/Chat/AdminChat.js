import React, { useState } from 'react';
import { Container, InputBase, IconButton, Divider, TextField } from '@mui/material'; 
import { Search as SearchIcon, Send as SendIcon } from '@mui/icons-material'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Row, Col } from 'react-bootstrap';

function AdminChat() {
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); 
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
   
    console.log('Sending message:', message);
   
    setMessage('');
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
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
              <ListItem alignItems="flex-start" button onClick={() => handleUserSelect("Ajinsa P A")}>
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
              
              <ListItem alignItems="flex-start" button onClick={() => handleUserSelect("Parvathy")}>
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
                      {" — Hlo i want to know about your service…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem alignItems="flex-start" button onClick={() => handleUserSelect("Midun")}>
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
              <ListItem alignItems="flex-start" button onClick={() => handleUserSelect("Arya")}>
                <ListItemText
                  primary="Arya"
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
              <ListItem alignItems="flex-start" button onClick={() => handleUserSelect("Anu")}>
                <ListItemText
                  primary="Anu"
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
            </List>
            
          </Col>
        
          <Col lg={8}  style={{ position: 'relative' }}>
            <h5 className='ms-3 mt-2'>{selectedUser || "Select a user"}</h5>
            <Divider component="li" />

            <div className="chat_body poppins-regular "  >
              {/* Render chat messages based on selectedUser */}
              {selectedUser && (
                <React.Fragment>
                  <div className="admin_chat">
                    <p>
                      <div className="admin_title">{selectedUser}</div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                      doloremque possimus explicabo, eveniet, accusamus animi soluta
                      optio eum commodi sunt, delectus nobis voluptatibus. Eius dolor,
                      expedita repudiandae amet eaque animi.
                    </p>
                  </div>
                
                </React.Fragment>
              )}
            </div>
           
            <div className="chat_input" style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff', padding: '10px' }}>
              <input 
                className='form-control'
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                style={{ flex: 1, padding: '10px', marginRight: '10px' }}
              />
              <IconButton aria-label="send" onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminChat;
