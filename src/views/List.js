import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const List = (props) => {
  return (
    <div>
      {props.plants ? (
        props.plants.map((plant, i) => {
          return (
            <Card key={i} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="" alt="" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {plant.display_pid}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Some text
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default List;
