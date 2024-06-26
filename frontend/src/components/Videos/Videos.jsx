import React from "react";
import { Grid } from "@mui/material";
import Videocard from "../VideoCard/Videocard";
import "./Videos.css";
import { useHistory } from "react-router";

const Videos = ({ vid }) => {
  return (
    <Grid
      className="mainbox"
      container
      spacing={2}
      sx={{ backgroundColor: "#181818" }}
    >
      {vid.length === 0 ? (
        <p>No videos found</p>
      ) : (
        vid.map((x) => (
          <Grid item xs={6} md={3} key={x._id}>
            <Videocard video={x} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Videos;
