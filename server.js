var express = require("express");
const app = express();
var multer = require("multer");

// Destination of uploadad pic to be stored
var upload = multer({ dest: "uploads/" });

// It declearing the port to use
const port = 3000;

// router to test the connection
app.get("/", (req, res) => {
  res.send("hello people");
});

// router to upload single pic as profile
app.post("/single", upload.single("profile"), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

// router to upload multiple pic as profiles
app.post("/bulk", upload.array("profiles", 10), (req, res) => {
  try {
    res.send(req.files);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});

//Listening to predeclared port(3000)
app.listen(port, () => {
  console.log("listening to the port: " + port);
});
