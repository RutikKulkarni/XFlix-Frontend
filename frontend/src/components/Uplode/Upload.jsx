import React, { useEffect, useState } from "react";
import "./Upload.css";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const endpoint = "https://xflix-node-teqb.onrender.com/v1/videos/";

export default function Uploadbtn() {
  const [open, setOpen] = useState(false);
  const [form, setform] = useState({
    videoLink: "",
    title: "",
    genre: "",
    contentRating: "",
    releaseDate: "",
    previewImage: "",
  });
  const submit = () => {
    handleClose();
    console.log(form);
    postvideo();
  };
  const postvideo = async () => {
    try {
      const res = await axios.post(endpoint, form);
      console.log(res);
      setform({
        videoLink: "",
        title: "",
        genre: "",
        contentRating: "",
        releaseDate: "",
        previewImage: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          Upload
        </Button>
      </Box>
      <Dialog className="dialogue" open={open} onClose={handleClose}>
        <Box className="ends">
          <DialogTitle>Upload</DialogTitle>
          <Button onClick={handleClose} variant="text">
            X
          </Button>
        </Box>
        <DialogContent>
          <Stack className="text" spacing={1} direction="column">
            <TextField
              className="dialogue"
              sx={{ borderColor: "white" }}
              fullWidth
              id="outlined-textarea"
              onChange={(e) => {
                setform({
                  ...form,
                  videoLink: e.target.value,
                });
              }}
              value={form.videoLink}
              label="Video link"
              placeholder="Placeholder"
              multiline
            />

            <TextField
              fullWidth
              id="outlined-textarea"
              onChange={(e) => {
                setform({
                  ...form,
                  previewImage: e.target.value,
                });
              }}
              value={form.previewImage}
              label="Thumbnail Image Link"
              placeholder="Placeholder"
              multiline
            />

            <TextField
              fullWidth
              id="outlined-textarea"
              onChange={(e) => {
                setform({
                  ...form,
                  title: e.target.value,
                });
              }}
              value={form.title}
              label="Title"
              placeholder="Placeholder"
              multiline
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Genre</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form.genre}
                label="Sort"
                onChange={(e) => {
                  setform({
                    ...form,
                    genre: e.target.value,
                  });
                }}
              >
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Comedy">Comedy</MenuItem>
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Right age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort"
                onChange={(e) => {
                  setform({
                    ...form,
                    contentRating: e.target.value,
                  });
                }}
                value={form.contentRating}
              >
                <MenuItem value="7+">7+</MenuItem>
                <MenuItem value="12+">12+</MenuItem>
                <MenuItem value="16+">16+</MenuItem>
                <MenuItem value="18+">18+</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="date"
              label="Date"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setform({
                  ...form,
                  releaseDate: e.target.value,
                });
              }}
              value={form.releaseDate}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
