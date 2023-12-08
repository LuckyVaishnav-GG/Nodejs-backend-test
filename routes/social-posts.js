const express = require("express");
const { getAllSocialPostsasync } = require("../controllers/social-posts-contorller");

const socialRoutes = express.Router();

socialRoutes.get("/posts/:pagNumber", getAllSocialPostsasync);

module.exports = socialRoutes;
