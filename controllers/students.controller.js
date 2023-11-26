import {
    createStudent,
    deleteStudentById,
    getStudent,
    getStudentById,
    updateStudentById,
  } from "../utils/students.js";
  
  export const createStudentController = (req, res) => {
    const student = req.body;
    const result = createStudent(student);
    res.json({
      message: "Create student successfully",
      result,
    });
  };
  
  export const getStudentController = (req, res) => {
    const result = getStudent();
    res.json({
      message: "Get students successfully",
      result,
    });
  };
  
  export const getStudentByIdController = (req, res) => {
    const { id } = req.params;
    const result = getStudentById(id);
    return res.json({
      message: "Get students successfully",
      result,
    });
  };
  
  export const updateStudentByIdController = (req, res) => {
    const { id } = req.params;
    const result = updateStudentById(id, req.body);
    return res.json({
      message: `Update students with ${id} successfully`,
      result,
    });
  };
  
  export const deleteStudentByIdController = (req, res) => {
    const { id } = req.params;
    deleteStudentById(id);
    return res.json({
      message: `Delete student with ${id} successfully`,
    });
  };
  
