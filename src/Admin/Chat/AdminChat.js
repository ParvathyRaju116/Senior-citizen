import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  chatContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  message: {
    marginBottom: theme.spacing(1),
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  inputField: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

const AdminChat = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: message,
        sender: 'Admin',
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Chat with Users
      </Typography>
      <Paper className={classes.chatContainer}>
        {messages.map((msg) => (
          <div key={msg.id} className={classes.message}>
            <Typography variant="body1" gutterBottom>
              {msg.sender} - {msg.timestamp}
            </Typography>
            <Typography variant="body2">{msg.content}</Typography>
          </div>
        ))}
      </Paper>
      <Divider />
      <div className={classes.inputContainer}>
        <TextField
          className={classes.inputField}
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default AdminChat;
