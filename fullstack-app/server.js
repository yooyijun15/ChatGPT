const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://mklr3213:fantastic77^^@cluster0.uvesfu0.mongodb.net/test?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const user = new User({
  username: 'June',
  password: '3213',
});

user.save()
  .then((savedUser) => {
    console.log('New user has been saved to the database successfully:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });

app.get('/', (req, res) => {
  res.send('Welcome to my game!');
});

app.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });
  user.save()
    .then((savedUser) => {
      res.send('User saved to the database');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
