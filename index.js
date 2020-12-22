require('dotenv').config();
const app = require('./server/server');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
