import React, { useEffect, useState } from "react";
import "./VideoPage.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { InputAdornment, Grid } from "@mui/material";
import Header from "../Header/Header";
import Videocard from "../VideoCard/Videocard";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Searchbar from "../SearchBar/Searchbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Videos from "../Videos/Videos";
import { useParams } from "react-router-dom";
import Iframe from "../Iframe/Iframe";

const endpoint = "https://xflix-node-teqb.onrender.com/v1/videos/";

const Videopage = () => {
  const [videodata, setvideodata] = useState([]);
  const [currentdata, setcurrentdata] = useState({});
  const [id, setid] = useState("");
  const [view, setviews] = useState(0);
  const params = useParams();
  console.log(params.id);
  const fetchurl = async () => {
    try {
      const res = await axios.get(endpoint);
      console.log(res);
      setvideodata(res.data.videos);
      const data = res.data.videos.find((x) => x._id === params.id);
      console.log(data);
      if (id !== params.id) {
        setid(params.id);
      }
      setcurrentdata(data);
      setviews(view + 1);
    } catch (err) {
      console.log(err);
    }
  };
  if (id !== params.id) {
    setid(params.id);
  }

  const increaseviews = async () => {
    try {
      const res = await axios.patch(endpoint + `${currentdata._id}/views`);
      console.log(res);
      setcurrentdata({
        ...currentdata,
        viewCount: currentdata.viewCount + 1,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const upreq = async () => {
    try {
      const res = await axios.patch(endpoint + `${currentdata._id}/votes`, {
        vote: "upVote",
        change: "increase",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const downreq = async () => {
    try {
      const res = await axios.patch(endpoint + `${currentdata._id}/votes`, {
        vote: "downVote",
        change: "increase",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchurl();
  }, [id]);

  useEffect(() => {
    increaseviews();
  }, [view]);

  console.log(currentdata);
  console.log(view);

  return (
    <>
      <Header />
      <div className="iframe">
        <Iframe videourl={currentdata.videoLink} />
      </div>
      <Box className="videoinfo">
        <Box>
          <Box>
            <h2 className="white">{currentdata.title}</h2>
          </Box>
          <Box display="flex" justifyContent="start">
            <span className="start">{currentdata.contentRating} </span>
            <span className="start">{currentdata.releaseDate}</span>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" spacing={2} className="buttons" name="upVotes">
            <Button
              variant="contained"
              style={{ backgroundColor: "black", borderRadius: "20%" }}
              onClick={() => {
                setcurrentdata({
                  ...currentdata,
                  votes: {
                    ...currentdata.votes,
                    upVotes: currentdata.votes.upVotes + 1,
                  },
                });
                upreq();
              }}
            >
              up{" "}
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", borderRadius: "20%" }}
              name="downVotes"
              onClick={() => {
                setcurrentdata({
                  ...currentdata,
                  votes: {
                    ...currentdata.votes,
                    downVotes: currentdata.votes.downVotes + 1,
                  },
                });

                downreq();
              }}
            >
              down{" "}
            </Button>
          </Stack>
        </Box>
      </Box>
      <Videos vid={videodata} />
    </>
  );
};

export default Videopage;
