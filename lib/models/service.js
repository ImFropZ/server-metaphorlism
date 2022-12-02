const service = require("../../json/service.json");

class ServiceMD {
  getService() {
    return service;
  }
}

module.exports = new ServiceMD();
