const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', uploadRoute);

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
