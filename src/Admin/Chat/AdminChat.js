import React from 'react';
import { Container, InputBase, IconButton, Divider } from '@mui/material'; // Import IconButton and Divider
import { Search as SearchIcon } from '@mui/icons-material'; // Import the search icon
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function AdminChat() {
  return (
    <div>
      <Container className='mt-5'>
        <h1>Chat</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            sx={{ flex: 1, bgcolor: 'background.paper', padding: '10px' }}
          />
        </div>
        <List sx={{ width: '40%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
               
              }
            />
          </ListItem>
          <hr />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <hr />
         
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />      <hr />
          </ListItem>
   
        </List>
      </Container>
    </div>
  );
}

export default AdminChat;
