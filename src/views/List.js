import React, { useContext, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Input,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { plants_per_page } from "../utils/constants";
import { AuthContext } from "../context/authContext";
import { UserProfileContext } from "../context/favouritesContext";

const List = ({ plants, page }) => {
  const startIndex = (page - 1) * plants_per_page;
  const { user } = useContext(AuthContext);
  const { favorites, addFavPlant, getFavorites } =
    useContext(UserProfileContext);

  const handleAddFavPlant = (plant) => {
    addFavPlant(plant);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div>
      {plants ? (
        plants
          .slice(startIndex, startIndex + plants_per_page)
          .map((plant, i) => {
            const isFav = favorites.some((e) => {
              if (e.pid === plant.pid) {
                return true;
              }
              return false;
            });
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
                        sx={{ color: isFav ? "green" : "lightgreen" }}
                        aria-label="Add to favourites"
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
