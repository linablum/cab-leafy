import * as React from "react";
import { useContext } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import { PlantsContext } from "../context/plantsContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ plant }) {
  const { details, fetchDetails, open, setOpen } = useContext(PlantsContext);

  const handleClose = () => setOpen(false);

  const handleDetails = (plant) => {
    fetchDetails(plant);
  };

  return (
    <div>
      <Button
        onClick={() => handleDetails(plant)}
        sx={{
          color: "seagreen",
          fontSize: "14px",
        }}
      >
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "white" }}
      >
        {!details ? (
          <Box sx={style}>
            <CircularProgress color="success" />
          </Box>
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
                    Brightness: {details.min_light_lux} -{" "}
                    {details.max_light_lux} lx
                  </p>
                  <p>
                    Temperture: {details.min_temp} - {details.max_temp} °C
                  </p>
                  <p>
                    Humidity: {details.min_env_humid} - {details.max_env_humid}{" "}
                    %
                  </p>
                  <p>
                    Soil moisture: {details.min_soil_moist} -{" "}
                    {details.max_soil_moist} %
                  </p>
                  <p>
                    Soil salinity: {details.min_soil_ec} - {details.max_soil_ec}{" "}
                    µS/cm
                  </p>
                  <img
                    src={details.image_url}
                    width={200}
                    height={200}
                    alt="Plant"
                  ></img>
                </>
              )}
            </Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
}
