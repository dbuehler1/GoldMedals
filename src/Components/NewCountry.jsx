import {
  Button,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AddCircle from "@mui/icons-material/AddCircle";
import React, { Component } from "react";

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

class Medal extends Component {
  state = {
    open: false,
    cName: "",
  };

  renderColor(color) {
    return color === undefined || color === null ? "black" : color;
  }
  
  handleChange = (e) => this.setState({ cName: e.target.value});

  

  render() {
    const {createCountry} = this.props;


    const setOpen = (status) => {
      this.setState({ open: status });
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const {cName} = this.state;

    const modal = () => {
      if(this.state.cName !== ""){
        createCountry(this.state.cName);
        handleClose();
        this.setState({cName: ""})
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
          open={this.state.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add a Country
            </Typography>
            <Typography id="modal-modal-description">Country Name:</Typography>
            <input type="text" value = {cName} onChange={this.handleChange}></input>
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
}
export default Medal;
