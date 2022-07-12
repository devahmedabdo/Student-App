const fs = require("fs");

const addStudent = (id, name, degrees, comment) => {
  const students = loadStudentDetails();
  const existStudent = students.find((ele) => {
    return ele.id === id;
  });
  if (!existStudent) {
    let total = 0;
    for (let degree of degrees) {
      total += +degree;
    }
    students.push({
      id,
      name,
      total,
      degrees,

      comment,
    });

    saveData(students);
    console.log("sucsessfully added one student");
  } else {
    console.log("this student already exsist");
  }
};

const loadStudentDetails = () => {
  try {
    const details = fs.readFileSync("students.json").toString();
    return JSON.parse(details);
  } catch (e) {
    return [];
  }
};
const saveData = (students) => {
  const saveData = JSON.stringify(students);

  fs.writeFileSync("students.json", saveData);
};
// delete
const deleteStudent = (id) => {
  let data = loadStudentDetails();
  let existStudent = data.filter((ele) => {
    return ele.id !== id;
  });
  if (data.length !== existStudent.length) {
    saveData(existStudent);
    console.log("student deleted sucsessfully");
  } else {
    console.log("student is not found");
  }
};
// read
const readStudent = (id) => {
  let data = loadStudentDetails();
  let studentWanted = data.find((ele) => {
    return ele.id === id;
  });
  if (studentWanted) {
    console.log(
      `The Student Name Is => ${studentWanted.name} And his total degrees is => ${studentWanted.total}`
    );
  } else {
    console.log(`this id is not linked to any student`);
  }
};
// list
const listStudents = (title) => {
  let data = loadStudentDetails();
  let num = 1;
  data.forEach((ele) => {
    if (data !== 0) {
      console.log(`Student number ${num} is ${ele.name}`);
      num++;
    } else {
      console.log("no student added yet!");
    }
  });
};

module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  listStudents,
};
