const express = require("express");
const router = express.Router();

const {
    getAllBlogArticles
} = require("../controllers/blogArticleController");

router.get("/blog-articles", getAllBlogArticles);

module.exports = router;