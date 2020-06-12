const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

const art = require('./routes/art');
const reaction = require('./routes/reaction');


const app = express();
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/art', art);
app.use('/api/v1/reaction', reaction);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));