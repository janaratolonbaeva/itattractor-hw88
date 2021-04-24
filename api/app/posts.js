const express = require('express');
const multer = require('multer');
const {nanoid} = require('nanoid');
const path = require('path');
const config = require('../config');
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  },
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const criteria = {};

    if (req.query.user) {
      criteria.user = req.query.user;
    }
    const posts = await Post.find(criteria).sort({datetime: -1}).populate('user', 'username');
    res.send(posts);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const postData = req.body;
    postData.user = req.user._id;

    if (req.file) {
      postData.image = 'uploads/' + req.file.filename;
    }

    const post = new Post(postData);
    await post.save();
    res.send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({_id: req.params.id});

    if (post) {
      return post;
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
