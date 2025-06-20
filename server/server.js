const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');   // ✅ Should export a router
const reviewRoutes = require('./routes/reviewRoutes'); // ✅ Should export a router

const app = express();
app.use(cors());
app.use(express.json());

console.log("🔧 Starting backend server...");

// ✅ Use routes (must be routers, not objects!)
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}).catch(err => console.error(err));

