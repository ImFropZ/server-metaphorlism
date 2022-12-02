const route = require("express").Router();
const MemberCT = require("../controllers/member");
const ProjectCT = require("../controllers/project");
const ServiceCT = require("../controllers/service");
const MetaphorlismCT = require("../controllers/metaphorlism");

route.get("/member", MemberCT.getMember);

route.get("/project", ProjectCT.getProject);

route.get("/service", ServiceCT.getService);

route.get("/metaphorlism", MetaphorlismCT.getInfo);

module.exports = route;
