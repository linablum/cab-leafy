import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../context/favouritesContext";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UserProfile = () => {
  const { favorites, getFavorites, deleteFavPlant } =
    useContext(UserProfileContext);

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDeleteFavPlant = (plant) => {
    deleteFavPlant(plant);
  };

  return (
    <div>
      {favorites ? (
        favorites.map((fav, i) => {
          return (
            <div key={i}>
              <p>{fav.display_pid}</p>
              {/*               <img
                src={favorites[i]}
                alt="logo"
                style={{ width: "120px", height: "120px", margin: "0px" }}
              /> */}
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteFavPlant(fav)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })
      ) : (
        <p>... No Favorites ...</p>
      )}
    </div>
  );
};

export default UserProfile;
