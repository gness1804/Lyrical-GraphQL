require('dotenv').config();
const app = require('./server/server');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running on port ${port}.`);
});
