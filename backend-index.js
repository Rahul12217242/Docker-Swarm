const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB 🎉"))
.catch(err => console.error("MongoDB connection failed:", err));

app.get('/', (req, res) => {
  res.send('Hello Boo from Node Backend! 🚀 Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
