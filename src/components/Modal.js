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

export default function BasicModal({ plant }) {
  const { details, fetchDetails, modalLoading, open, setOpen } =
    useContext(PlantsContext);
  /*  const [open, setOpen] = useState(false); */
  /* const handleOpen = () => {
    setOpen(true);
    //  fetchDetails(plant);
  }; */
  const handleClose = () => setOpen(false);

  const handleDetails = (plant) => {
    fetchDetails(plant);
  };

  /*   useEffect(
    (plant) => {
      fetchDetails(plant);
    },
    [handleOpen]
  ); */

  return (
    <div>
      {/*   <Button onClick={handleOpen}> */}
      <Button onClick={() => handleDetails(plant)}>Details</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {!details ? (
          <p>loading</p>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {details && (
                <>
                  <p>Name: {details.display_pid}</p>
                </>
              )}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {details && (
                <>
                  <p>
                    Brightness:
                    {details.min_light_lux} - {details.max_light_lux} lx
                  </p>
                  <p>
                    Temperture:
                    {details.min_temp} - {details.max_temp} °C
                  </p>
                  <p>
                    Humidity:
                    {details.min_env_humid} - {details.max_env_humid} %
                  </p>
                  <p>
                    Soil moisture:
                    {details.min_soil_moist} - {details.max_soil_moist} %
                  </p>
                  <p>
                    Soil salinity:
                    {details.min_soil_ec} - {details.max_soil_ec} µS/cm
                  </p>
                  <img src={details.image_url}></img>
                </>
              )}
            </Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
}
