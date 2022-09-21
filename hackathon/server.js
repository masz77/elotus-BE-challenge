if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//db connection and set up
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DATABASE_URL,
  () => console.log("Connected to mongodb thru Mongoose..."),
  (error) => console.error(error)
);

//start the app
const app = require("./app.js");
app.listen(process.env.PORT || 6969, () => {
  console.log(`App is running at ${process.env.PORT || 6969}...`);
});
