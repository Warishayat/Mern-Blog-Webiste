import React, { useState, useEffect } from "react";
import Blogimage from "../assets/Blogimage.jpg";
import { useSearchParams } from "react-router-dom";
import {
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./CreatBlog.css";

function CreatBlog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  console.log(category);

  const initialPost = {
    title: "",
    description: "",
    image: "",
    username: "",
    categories: category, 
  };

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      setPost((prev) => ({ ...prev, image: file.name }));
    }
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="creatblog-container">
      <img src={Blogimage} alt="image of blogs" className="image" />
      <FormControl className="form">
        <div className="container">
          <label htmlFor="fileinput">
            <AddCircleOutlineIcon fontSize="large" color="action" />
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button variant="contained" className="button">
            Publish
          </Button>
        </div>
        <InputBase
          className="label"
          placeholder="Enter the Title of Blog"
          onChange={handleChange}
          name="title"
          value={post.title}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={15}
          placeholder="Add your Content"
          style={{ width: 1000 }}
          className="textarea"
          onChange={handleChange}
          name="description"
          value={post.description}
        />
      </FormControl>
    </div>
  );
}

export default CreatBlog;
