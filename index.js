const inquirer = require("inquirer");
// const jest = require("jest");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const teamArray = [];
const idArray = [];

// questions for all employees
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
    choices: ["Manager", "Engineer", "Intern"],
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
    console.log(data);

    const mgr = new Manager(
      data.mgrName,
      data.mgrID,
      data.mgrEmail,
      data.mgrOfficeNum
    );
    teamArray.push(mgr);
    console.log(mgr);
    console.log(teamArray);

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
        teamArray.push(eng);
        console.log(eng);
        console.log(teamArray);
        break;
      case "Intern":
        const int = new Intern(
          data.empFirstName,
          data.empID,
          data.empEmail,
          data.school
        );
        teamArray.push(int);
        console.log(int);
        console.log(teamArray);
        break;
    }
    if (data.moreEmployees) {
      memberObj(data);
    }
  });
};

init();

// console.log(init);

// console.log(data);
