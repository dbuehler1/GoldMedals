import {
  Button,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AddCircle from "@mui/icons-material/AddCircle";
import React, { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  
};
const cancelStyle = {
  bgcolor: "red",
  color: "red",
  float: "right",
}

const createStyle = {
  bgcolor: "green",
  color: "green",
  float: "right",
}

const NewCountry = (props) => {
  const [Status, setStatus] = useState(Boolean);
  const [cName, setCname] = useState(String);
  // state = {
  //   open: false,
  //   cName: "",
  // };
  
   const handleChange = (e) => setCname(e.target.value);


    const setOpen = (status) => {
      setStatus(status);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      let modalStatus = false;
      setCname("");
      setStatus(modalStatus);
    }, [])
  
    

    const modal = () => {
      if(cName !== ""){
        props.createCountry(cName);
        handleClose();
        setCname("");
      }
      else {
        handleClose();
      }

      
    }
    return (
      
      <div>
        <IconButton onClick={handleOpen} color="success" className="addButton">
          <AddCircle fontSize="large" />
          Add Country
        </IconButton>

        <Modal
          open={Status}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add a Country
            </Typography>
            <Typography id="modal-modal-description">Country Name:</Typography>
            <input type="text" value = {cName} onChange={handleChange}></input>
            <br></br>
            
            <Button className="createCountry" style={createStyle}  type='submit' onClick={ () => modal()}>
              Create
            </Button>
            <Button className="cancelbtn" style={cancelStyle} type='submit' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }

export default NewCountry;
