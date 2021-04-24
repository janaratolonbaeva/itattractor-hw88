const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: function () {
      if (!this.image) {
        return true;
      }
      return false;
    }
  },
  image: {
    type: String,
    required: function () {
      if (!this.description) {
        return true;
      }
      return false;
    }
  },
  datetime: {
    type: Date,
    default: Date.now(),
    required: true
  }
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;