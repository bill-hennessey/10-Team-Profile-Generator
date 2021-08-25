const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const team = [];

// Inquirer questions array looks like this below. Might need separate arrays for each job profile. In that case start with a soimple one question promt that leads to an if statement. Fire off another function with prompt questions based on the asnwer.
const questions = [
  {
    type: "input",
    name: "firstName",
    message: "Please enter the employee first name",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the employee email",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the employee GitHub username",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
  },
];
