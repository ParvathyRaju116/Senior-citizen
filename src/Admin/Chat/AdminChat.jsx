import React, { useEffect, useState } from "react";
import {
  Container,
  InputBase,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { Search as SearchIcon, Send as SendIcon } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import baseurl from "../../Services/baseurl";
import "./AdminChat.css";

function AdminChat() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [singleMessage, setSingleMessage] = useState(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", message);

    setMessage("");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const result = await axios.get(`${baseurl}/complaints/chats`);
      console.log(result.data);
      setUsers(result.data.uniqueSenders);
    } catch (error) {
      console.log(error);
    }
  };

  const MessageSingleUser = async (id, name) => {
    try {
      const result = await axios.get(
        `${baseurl}/getMessages/${id}/65e16d424097856f1bda4503`
      );
      console.log(result.data);
      setSingleMessage(result.data);
      setSelectedUser(capitalizeFirstLetter(name));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <h3 className="ms-5 mt-2">Chat</h3>
      <Container className="mt-5 " style={{ backgroundColor: "white" }}>
        <Row>
          <Col lg={4} style={{ borderRight: "15px solid #FAF9F6 " }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search…"
                sx={{ flex: 1, bgcolor: "background.paper", padding: "10px" }}
              />
            </div>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {users ? (
                <>
                  {" "}
                  {users.map((i) => (
                    <>
                      {" "}
                      <ListItem
                        alignItems="flex-start"
                        button
                        onClick={() => MessageSingleUser(i?._id, i?.senderName)}
                      >
                        <ListItemText
                          primary={capitalizeFirstLetter(i?.senderName)}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              ></Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                    </>
                  ))}
                </>
              ) : (
                "No Users Avalible"
              )}
            </List>
          </Col>

          <Col lg={8} style={{ position: "relative" }}>
            <h4 className="ms-3 mt-2">{selectedUser || "Select a user"}</h4>
            <Divider component="li" />

            <div className="chat_body poppins-regular ">
              {/* Render chat messages based on selectedUser */}
              {singleMessage &&
                singleMessage.map((i) => (
                  <React.Fragment>
                    {i?.senderId === "65e16d424097856f1bda4503" ? (
                      <>
                        <div className="user_chat">
                          <p>
                            {i.message}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="admin_chat">{i?.message}</div>
                      </>
                    )}
                  </React.Fragment>
                ))}
            </div>

            <div
              className="chat_input"
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "#fff",
                padding: "10px",
              }}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                style={{ flex: 1, padding: "10px", marginRight: "10px" }}
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
