const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exitHook = require('async-exit-hook');
const config = require('./config');
const posts = require('./app/posts');
const users = require('./app/users');

const port = 8000;

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/posts', posts);
app.use('/users', users);

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  exitHook(async callback => {
    await mongoose.disconnect();
    console.log('mongoose disconnected');
    callback();
  });
}

run().catch(console.error);