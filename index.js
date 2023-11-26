import express from "express";
import studentRouter from "./routes/students.routes.js";
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.use("/students", studentRouter);

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Your app is listening on PORT ${PORT}`);
//   }
// });





// import express from "express";
import fs from "fs"
import { paginationCtr } from "./routes/pagination.js";
const homework = express()
const PORT = 3000

//pagination
// homework.get('/student',paginationCtr)

//filter
homework.get('/students', (req, res) => {
    const students =JSON.parse(fs.readFileSync("students.json"))
    // Lấy query parameters từ URL
    const { name, age } = req.query;
  
    // Thực hiện filter dựa trên query parameters
    let filteredStudents = students;
    if (name) {
      filteredStudents = filteredStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (age) {
      filteredStudents = filteredStudents.filter(student => student.age === parseInt(age));
    }
  
    res.json(filteredStudents);
  });

  homework.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Your app is listening on PORT ${PORT}`);
  }
});