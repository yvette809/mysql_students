const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ub021299",
  database: "studentsystem",
});

db.connect();

app.post("/api/v1/register", async (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const name = req.body.name;
  const courses_of_interest = req.body.courses_of_interest;

  const reponse = await db.query(
    "INSERT INTO students (email,phone,name,courses_of_interest) VALUES(?,?,?,?)",
    [email, phone, name, courses_of_interest],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});
app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
