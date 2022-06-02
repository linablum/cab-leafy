import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { plants_per_page } from "../utils/constants";
import { AuthContext } from "../context/authContext";
import { UserProfileContext } from "../context/favouritesContext";

const List = ({ plants, page }) => {
  const startIndex = (page - 1) * plants_per_page;
  const { user } = useContext(AuthContext);
  const { addFavPlant } = useContext(UserProfileContext);

  const handleAddFavPlant = (plant) => {
    addFavPlant(plant);
  };

  return (
    <div>
      {plants ? (
        plants
          .slice(startIndex, startIndex + plants_per_page)
          .map((plant, i) => {
            return (
              <Card key={i} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="40" image="" alt="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {plant.display_pid}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <IconButton
                        className="btnFav"
                        onClick={
                          user
                            ? () => {
                                handleAddFavPlant(plant);
                              }
                            : () => alert("Please Login first!")
                        }
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            );
          })
      ) : (
        <p>No data received</p>
      )}
    </div>
  );
};

export default List;
