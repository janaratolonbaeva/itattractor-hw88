const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');

const Post = require('./models/Post');
const Comment = require('./models/Comment');
const User = require('./models/User');

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [firstPost, secondPost] = await Post.create({
    user: 'John Doe',
    title: 'First Post',
    description: 'This post on any topic',
    image: 'fixtures/random1.jpeg',
    datetime: Date.now()
  }, {
    user: 'Arthur Green',
    title: 'Second Post',
    description: 'This post on any topic too',
    image: 'fixtures/random2.jpeg',
    datetime: Date.now()
  });

  await Comment.create({
    post: firstPost,
    text: 'Something text'
  }, {
    post: secondPost,
    text: 'Another something text'
  });

  await mongoose.connection.close();
};

// run().catch(console.error);

