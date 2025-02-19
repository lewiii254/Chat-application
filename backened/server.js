import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Create express app
const app = express();

// Set up the port
const port = process.env.PORT || 5000;

const MONGODBURI = process.env.MONGODBURI;

// API routes
app.get('/', (req, res) => {
  res.send("Hello World!");
});


// Connect to MongoDB
mongoose.connect(MONGODBURI)
.then(() => {
    app.listen(port, () => {
        console.log(`App listening on port: ${port}`);
        console.log(`App connected to db`);
    });


})
.catch(err => {
    console.error('Database connection error:', err);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});