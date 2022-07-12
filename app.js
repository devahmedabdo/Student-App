const yargs = require("yargs");
const students = require("./students");

yargs.command({
  command: "add",
  descripe: "add student details",
  builder: {
    id: {
      descripe: "id of student",
      demandOption: true,
      type: Number,
    },
    name: {
      descripe: "name of student",
      demandOption: true,
      type: String,
    },
    degrees: {
      descripe: "degrees of student",
      demandOption: true,
      type: Object,
    },
    comment: {
      descripe: "comment on student",
      type: String,
    },
  },
  handler: () => {
    students.addStudent(
      yargs.argv.id,
      yargs.argv.name,
      yargs.argv.degrees,
      yargs.argv.comment
    );
  },
});
yargs.command({
  command: "delete",
  descripe: "delete student details",
  builder: {
    id: {
      descripe: "id of student",
      demandOption: true,
      type: Number,
    },
  },
  handler: () => {
    students.deleteStudent(yargs.argv.id);
  },
});
yargs.command({
  command: "read",
  descripe: "read student details",
  builder: {
    id: {
      descripe: "id of student",
      demandOption: true,
      type: Number,
    },
  },
  handler: () => {
    students.readStudent(yargs.argv.id);
  },
});
yargs.command({
  command: "list",
  descripe: "list of student details",

  handler: () => {
    students.listStudents();
  },
});

yargs.parse();
