const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Learn Programming", "Read Proramming", "Practice programming"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello good to see you back to the express practice");
  // let today = new Date();
  // let currentDay = today.getDay();
  // let day = "";
  //   if (currentDay === 6 || currentDay === 0) {
  // res.send("<h1>YAY it's a birth day</h1>");
  // res.write("<h1>YAY it's a week<end/h1>");
  // res.sendFile(__dirname + "/weekend.html");
  // day = "Weekend";
  //   } else {
  // res.send("<h1>Boo! I have to work</h1>");
  // res.write("<p>It's not a weekend Boo! I have to work to be done<p>");
  // res.write("<h1>Boo! I have to work</h1>");
  // res.sendFile(__dirname + "/index.html");
  // res.sendFile(__dirname + "/weekday.html");
  // day = "WeekDay";

  // res.send();
  //   }
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is equal to: " + currentDay);
  // }
  // let options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  // };
  // let day = today.toLocaleDateString("en-US", options);

  // let const = date.getDay();
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  // console.log(req.body);
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// app.post("/work", (req, res) => {
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.get("/about", (req, res) => {
  res.render("about");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server connected at the port ${port}`);
});
