import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { PlantsContext } from "../context/plantsContext";
import { CurrencyExchangeOutlined } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(plant) {
  const { details, fetchDetails } = useContext(PlantsContext);
  const [open, setOpen] = useState(false);
  const handleOpen = (plant) => {
    setOpen(true);
    fetchDetails(plant);
  };
  const handleClose = () => setOpen(false);

  console.log(plant);
  // const handleDetails = (plant) => {
  //  fetchDetails(plant);
  //};

  /*   useEffect(
    (plant) => {
      fetchDetails(plant);
    },
    [handleOpen]
  ); */

  return (
    <div>
      <Button onClick={handleOpen}>
        {/*  <Button onClick={(handleOpen, () => handleDetails(plant))}> */}
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {details && <p>{details.pid}</p>}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
