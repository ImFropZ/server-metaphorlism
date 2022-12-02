const project = require("../../json/project.json");

class ProjectMD {
  getProject() {
    return project;
  }
}

module.exports = new ProjectMD();
