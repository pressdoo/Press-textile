
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Press Textile API running');
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
