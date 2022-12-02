const ProjectMD = require("../models/project");

class ProjectCT {
  getProject(req, res) {
    return res.status(200).json(ProjectMD.getProject());
  }
}

module.exports = new ProjectCT();
