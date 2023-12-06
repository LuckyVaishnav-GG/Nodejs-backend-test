const express = require("express");
const axios = require("axios");
//const getAllSocialPosts = require('../controllers/social-posts-contorller');

const socialRoutes = express.Router();

socialRoutes.get("/posts/:pagNumber", async (req, res) => {
  const pagNumber = Number(req.params.pagNumber);
  const limit = 10;
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      console.log( typeof pagNumber);
      let offset = pagNumber == 1 ? pagNumber : (pagNumber - 1) * 10;
      let socialPosts = data.data.slice(offset ,offset+limit + 1);
      return res.json({ socialPosts: socialPosts });
    })
    .catch((error) => {
      console.log(error);
      return res.sendStatus(500);
    });
});

module.exports = socialRoutes;
