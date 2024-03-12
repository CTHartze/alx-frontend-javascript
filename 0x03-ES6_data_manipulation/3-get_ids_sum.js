export default function getStudentIdsSum(students) {
  // returns the sum of all the student ids
  // accepts a list of students (from getListStudents) as a parameter
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
