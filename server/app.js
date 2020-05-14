const express = require('express');
const app = new express();
const port = 3000;

const consumption = require('./routers/consumption');

app.use('/consumption', consumption);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
