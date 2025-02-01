import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { name, registrationNumber, grade } = req.body;
  try {
   if (!name || !registrationNumber || !grade ) {
    handleValidationError("Please Fill Full Form!", 400);
  }
  await Student.create({ name, registrationNumber, grade });
  res.status(200).json({
    success: true,
    message: "Student Created!",
  });   
} catch (err) {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
} 
};

export const getAllStudents = async (req, res, next) => {
  try {
   const students = await Student.find();
  res.status(200).json({
    success: true,
    students,
  });   
} catch (err) {
  console.error(err.message);
        res.status(500).send('Internal Server Error');
}
};



