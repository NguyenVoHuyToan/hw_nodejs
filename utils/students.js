import fs from "fs";
import path from "path";

export function createStudent({ name, age, gender }) {
  console.log(path.resolve());
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  //   Tạo student giả
  const student = {
    id: Math.random() * 1000,
    name: name,
    age: age,
    gender: gender,
  };
  const results = [...students, { ...student }];
  fs.writeFileSync("students.json", JSON.stringify(results));
  return student;
}

export function getStudent() {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  return students;
}

export function getStudentById(id) {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const student = students.find((student) => student.id === +id);
  console.log(student);
  return student;
}

export const updateStudentById = (id, body) => {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const result = students.map((student) => {
    if (student.id === +id) {
      return { ...student, ...body };
    }
    return student;
  });
  fs.writeFileSync("students.json", JSON.stringify(result));
  return result;
};

export const deleteStudentById = (id) => {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const result = students.filter((student) => student.id !== +id);
  fs.writeFileSync("students.json", JSON.stringify(result));
};
