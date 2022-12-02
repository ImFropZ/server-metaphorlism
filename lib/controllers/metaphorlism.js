const MetaphorlismMD = require("../models/metaphorlism");

class MetaphorlismCT {
  getInfo(req, res) {
    return res.status(200).json(MetaphorlismMD.getInfo());
  }
}

module.exports = new MetaphorlismCT();
