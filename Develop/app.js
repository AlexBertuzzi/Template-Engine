const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = [];

function renderTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    console.log(teamMembers) ;
}

const createTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "chooseRole",
          message: "Choose Team Member Role",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more members"
          ]
        }
      ])
      .then((response) => {
        switch (response.chooseRole) {
          case "Manager": {
            addManager();
            break;
          }
          case "Engineer": {
            addEngineer();
            break;
          }
          case "Intern": {
            addIntern();
            break;
          }
          case "No more Members": {
            renderTeam();
            break;
          }
        }
      });
}

createTeam();

const addManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter Id: ",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter Email: ",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Please enter office number: ",
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );

        teamMembers.push(manager);
        console.log(teamMembers)
       
        createTeam();
      });
};

const addEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter Id: ",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter Email: ",
        },
        {
          type: "input",
          name: "github",
          message: "Please enter GitHub username: ",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );

        teamMembers.push(engineer);
        console.log(teamMembers)
        createTeam();
      });
};

const addIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter Id: ",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter Email: ",
        },
        {
          type: "input",
          name: "school",
          message: "Please enter school name: ",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );

        teamMembers.push(intern);
        console.log(teamMembers)
        createTeam();
      });
};


