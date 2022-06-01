import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { plants_per_page } from "../utils/constants";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/config";
import { AuthContext } from "../context/authContext";

const List = ({ plants, page }) => {
  const startIndex = (page - 1) * plants_per_page;
  const { user } = useContext(AuthContext);

  const likeFunction = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        user: user.email,
        likes: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
                      <button>Like</button>
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
