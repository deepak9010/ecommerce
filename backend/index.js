const app = require("./app");
const cors = require("cors");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database")



// app.use(cors({
//    origin : "*",
//    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//    credentials: true,
// }));


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to Uncaught Exception`);
   process.exit(1);
 });


// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, ()=>{
   console.log(`server is running on https://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to Unhandled Promise Rejection`);
 
   server.close(() => {
     process.exit(1);
  });
 });