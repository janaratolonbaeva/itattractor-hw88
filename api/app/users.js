const express = require('express');
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    user.generateToken();
    await user.save();
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.post('/sessions', async (req, res) => {
  const user = await User.findOne({username: req.body.username});

  if (!user) {
    return res.status(400).send({message: 'Credentials are wrong!'});
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(400).send({message: 'Credentials are wrong!'});
  }

  user.generateToken();
  await user.save();

  res.send({message: 'Username and Password correct', user});
});

router.delete('/sessions', async (req, res) => {
  const token = req.get('Authorization');
  const successMessage = {message: 'Success'};

  if (!token) return res.send(successMessage);

  const user = await User.findOne({token});

  if (!user) return res.send(successMessage);

  user.generateToken();
  await user.save();

  return res.send(successMessage);
});

router.post('/secret', auth, async (req, res) => {
  return res.send({message: 'Secret message', username: req.user.username});
});

module.exports = router;












