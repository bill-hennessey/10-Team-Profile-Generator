const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const mgrCard = require("./src/mgrCard");
const intCard = require("./src/intCard").default;
const engCard = require("./src/engCard");
const compiler = require("./src/compiler");
const teamArray = [];
const idArray = [];
// const cardDiv = document.getElementById("#card-div");

const mQuestions = [
  {
    type: "input",
    name: "mgrName",
    message: "Please enter your first name",
  },
  {
    type: "input",
    name: "mgrEmail",
    message: "Please enter your email",
  },
  {
    type: "input",
    name: "mgrID",
    message: "Please enter your employee id number",
  },
  {
    type: "input",
    name: "mgrOfficeNum",
    message: "Please enter your office number",
  },
];

const empQuestions = [
  {
    type: "list",
    name: "role",
    message: "Please select the employee job role",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "empFirstName",
    message: "Please enter the employee first name",
  },
  {
    type: "input",
    name: "empEmail",
    message: "Please enter the employee email",
  },
  {
    type: "input",
    name: "empID",
    message: "Please enter the employee id number",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter their school",
    when: (input) => {
      return input.role == "Intern";
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter their GitHub username",
    when: (input) => {
      return input.role == "Engineer";
    },
  },
  {
    type: "confirm",
    name: "moreEmployees",
    message: "Would you like to enter more employees?",
  },
];

const init = () => {
  inquirer.prompt(mQuestions).then((data) => {
    const mgr = new Manager(
      data.mgrName,
      data.mgrID,
      data.mgrEmail,
      data.mgrOfficeNum
    );
    mgr.role = "Manager";
    teamArray.push(mgr);

    memberObj(data);

    return;
  });
};

const memberObj = (data) => {
  inquirer.prompt(empQuestions).then((data) => {
    switch (data.role) {
      case "Engineer":
        const eng = new Engineer(
          data.empFirstName,
          data.empID,
          data.empEmail,
          data.github
        );
        eng.role = "Engineer";
        teamArray.push(eng);

        break;
      case "Intern":
        const int = new Intern(
          data.empFirstName,
          data.empID,
          data.empEmail,
          data.school
        );
        int.role = "Intern";
        teamArray.push(int);

        break;
    }
    if (data.moreEmployees) {
      memberObj(data);
    } else {
      // compiler(teamArray);
      return;
    }
  });
};

init();

// console.log(init);

// console.log(data);
