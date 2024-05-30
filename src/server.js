require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI_TEST;

connectDB(MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
