const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/reviews', function (req, res, next) {
  fs.readFile(`${__dirname}/reviews.json`, (err, data) => {
    if (err) throw err;
    let newData = JSON.parse(data);
    res.status(200).json({ status: 'success', newData });
  });
});

app.post('/reviews', function (req, res, next) {
  fs.readFile(`${__dirname}/reviews.json`, (err, data) => {
    if (err) throw err;
    let newData = JSON.parse(data);
    console.log(newData);

    newData.push(req.body);

    fs.writeFile(
      `${__dirname}/reviews.json`,
      JSON.stringify(newData),
      (err) => {
        if (err) res.status(400).json({ status: 'failed', err });
        console.log('done');
        res
          .status(201)
          .json({ status: 'success', message: 'added successfully' });
      }
    );
  });
});

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
process.on('uncaughtException', (err) => {
  console.log(err.message, err.name);
  console.log('uncaught exception shutting down server');
  server.close(() => {
    process.exit(1);
  });
});
