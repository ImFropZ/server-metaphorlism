const ServiceMD = require("../models/service");

class ServiceCT {
  getService(req, res) {
    return res.status(200).json(ServiceMD.getService());
  }
}

module.exports = new ServiceCT();
