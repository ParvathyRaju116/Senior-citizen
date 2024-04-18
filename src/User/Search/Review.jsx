import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect, useState } from "react";
import axios from "axios";
import baseurl from "../../Services/baseurl";
const Review = ({ service }) => {
  const [open, setOpen] = useState(false);

  const id = { id: service.serviceProviderId };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  console.log(service);

  useEffect(() => {
    viewReview();
  }, []);

  const viewReview = async () => {
    try {
      const response = await axios.post(`${baseurl}/reviews/view-reviews`, id);
      console.log(response.data?.viewReviews);
    } catch (error) {
      console.log(error);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="bg-dark">
        <h3 className="text-center text-white">Reviews</h3>
        <hr />
      </div>

      <Divider />
    </Box>
  );
  return (
    <>
      <div>
        <Button onClick={toggleDrawer(true)}>Review</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default Review;
