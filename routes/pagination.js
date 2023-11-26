import express from "express"
import fs from "fs"
export const paginationCtr = express.Router()

paginationCtr.get('/students', async (req, res) => {
    try { 
       const currentPage = parseInt(req.query.page) || 1;
       const perPage = parseInt(req.query.perPage) || 10;
 
       const startIndex = (currentPage - 1) * perPage;
       const endIndex = currentPage * perPage;
  
       const listStudent = JSON.parse(fs.readFileSync("students.json"))
       const students = await listStudent.find().skip(startIndex).limit(perPage);
  
       const totalCount = await listStudent.countDocuments();
       const totalPages = Math.ceil(totalCount / perPage);
 
       res.json({
          students,
          totalPages,
          currentPage
       });
    } catch (error) {
       res.status(500).json({ error: 'Internal server error' });
    }
 });
 
